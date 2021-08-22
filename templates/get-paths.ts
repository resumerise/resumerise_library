// deno-lint-ignore-file
import dirname from "https://deno.land/x/denoname@v0.8.1/mod/dirname.ts";
const __dirname = dirname(import.meta);

export const getNavTemplatePath = (): string => {
  return `/${__dirname}/widgets/nav.eta`;
};

export const getAddItemTemplatePath = (): string => {
  console.log(__dirname);
  return `/${__dirname}/widgets/add.eta`;
};

export const getWidgetCSSFilePath = (): string => {
  console.log(__dirname);
  return `/${__dirname}/css/widget.css`;
};
