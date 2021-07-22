import logSymbols from "https://cdn.skypack.dev/log-symbols";
import { DocType } from "../models/doc-type.model.ts";
import { ThemeAction } from "../models/theme-action.ts";

export const compileHTML = async (
  themePath: string,
  json: string,
  type: DocType,
): Promise<string> => {
  try {
    const themeModule = await import(themePath) as ThemeAction;
    return themeModule.render(json, type);
  } catch (e) {
    const errorMsg = `couldn't render HTML ${e}`;
    console.log(logSymbols.error, errorMsg);
    return new Promise(function (_, reject) {
      reject(errorMsg);
    });
  }
};
