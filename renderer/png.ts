import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";
import { DocType } from "../models/doc-type.model.ts";
import { compileHTML } from "./html.ts";

export const compilePNG = async (
  themePath: string,
  json: string,
): Promise<Uint8Array> => {
  const compiledHTML = await compileHTML(themePath, json, DocType.PDF);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.screenshot();
  await page.setContent(compiledHTML);
  const result = await page.screenshot({ type: "png" }) as Uint8Array;
  await browser.close();
  return result;
};
