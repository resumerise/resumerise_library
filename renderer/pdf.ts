import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";
import { Resume } from "../codegen/model/resume.ts";
import { compileHTML } from "./html.ts";
import * as eta from "https://deno.land/x/eta@v1.6.0/mod.ts";
import * as stdPath from "https://deno.land/std@0.105.0/path/mod.ts";
import { cryptoRandomString } from "https://deno.land/x/crypto_random_string@1.1.0/mod.ts";
import { getFileContent } from "../mod.ts";

eta.configure({
  views: stdPath.join("views"),
});

const getFooter = async (resume: Resume): Promise<string> => {
  try {
    const result = await eta.render(
      await getFileContent("../templates/footer.eta", import.meta.url),
      {
        resume: resume,
      },
    ) as string;
    return result;
  } catch (e) {
    console.log(`Error while compiling footer: ${e}`);
    return "";
  }
};

const getHeader = async (resume: Resume): Promise<string> => {
  try {
    const result = await eta.render(
      await getFileContent("../templates/header.eta", import.meta.url),
      {
        resume: resume,
      },
    ) as string;
    return result;
  } catch (e) {
    console.log(`Error while compiling footer: ${e}`);
    return "";
  }
};

export const compilePDF = async (
  themePath: string,
  resume: Resume,
  moduleUrl: string,
): Promise<Uint8Array> => {
  let result = new Uint8Array();
  try {
    const pdfExportFile = `${cryptoRandomString({ length: 10 })}.pdf`;
    const pdfExportPath =
      new URL(`../tmp/${pdfExportFile}`, moduleUrl).pathname;
    const compiledHTML = await compileHTML(
      themePath,
      resume,
      "PRINT",
    );
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(compiledHTML, {
      waitUntil: [
        "load",
        "domcontentloaded",
        "networkidle0",
        "domcontentloaded",
        "networkidle2",
      ],
      timeout: 0,
    });
    await page.pdf({
      format: "a4",
      displayHeaderFooter: true,
      footerTemplate: await getFooter(resume),
      headerTemplate: await getHeader(resume),
      path: pdfExportPath,
      margin: {
        bottom: "27mm",
        top: "27mm",
      },
    });
    result = Deno.readFileSync(pdfExportPath);
    Deno.removeSync(pdfExportPath);
    await browser.close();
  } catch (e) {
    console.log(`PDF compile was not possible: ${e}`);
  }
  return result;
};
