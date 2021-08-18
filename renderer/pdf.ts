import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";
import { Resume } from "../codegen/models/model/resume.ts";
import { DocType } from "../models/doc-type.model.ts";
import { compileHTML } from "./html.ts";
import * as eta from "https://deno.land/x/eta@v1.6.0/mod.ts";
import * as stdPath from "https://deno.land/std@0.97.0/path/mod.ts";
const __dirname = stdPath.dirname(stdPath.fromFileUrl(import.meta.url));

eta.configure({
  views: stdPath.join("views"),
});

const getFooter = async (resume: Resume): Promise<string> => {
  try {
    const result = await eta.render(
      Deno.readTextFileSync(`${__dirname}/../templates/footer.eta`),
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
      Deno.readTextFileSync(`${__dirname}/../templates/header.eta`),
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
    const pdfExportFile = `${crypto.randomUUID()}.pdf`;
    const pdfExportPath = `${__dirname}/../tmp/${pdfExportFile}`;
    const compiledHTML = await compileHTML(themePath, resume, DocType.PDF);
    const browser = await puppeteer.launch();
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
