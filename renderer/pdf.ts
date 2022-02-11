import puppeteer from "https://deno.land/x/puppeteer@9.0.2/mod.ts";
import { Resume } from "../codegen/model/resume.ts";
import { compileHTML } from "./html.ts";
import * as eta from "https://deno.land/x/eta@v1.6.0/mod.ts";
import * as stdPath from "https://deno.land/std@0.105.0/path/mod.ts";
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
): Promise<Uint8Array> => {
  let result = new Uint8Array();
  try {
    const compiledHTML = await compileHTML(
      themePath,
      resume,
      "PRINT",
    );
    const browser = await puppeteer.launch({
      ignoreDefaultArgs: ["--disable-extensions"],
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
    });
    result = await page.pdf({
      format: "a4",
    });
    await browser.close();
  } catch (e) {
    console.log(`PDF compile was not possible: ${e}`);
  }
  return result;
};
