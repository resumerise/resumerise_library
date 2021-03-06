import puppeteer from "https://deno.land/x/puppeteer@9.0.2/mod.ts";
import { Resume } from "../codegen/model/resume.ts";
import { compileHTML } from "./html.ts";

export const compilePNG = async (
  themePath: string,
  resume: Resume,
): Promise<Uint8Array> => {
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
  page.screenshot({ fullPage: true });
  await page.setContent(compiledHTML);
  const result = await page.screenshot({ type: "png" }) as Uint8Array;
  await browser.close();
  return result;
};
