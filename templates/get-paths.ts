// deno-lint-ignore-file

import { getFileContent } from "../mod.ts";

export const getNavTemplatePath = async (): Promise<string> => {
  return await getFileContent("./widgets/nav.eta", import.meta.url);
};

export const getAddItemTemplatePath = async (): Promise<string> => {
  return await getFileContent("./widgets/add.eta", import.meta.url);
};

export const getWidgetCSSFilePath = async (): Promise<string> => {
  return await getFileContent("./css/widget.css", import.meta.url);
};
