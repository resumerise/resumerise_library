// deno-lint-ignore-file
import * as stdPath from "https://deno.land/std@0.97.0/path/mod.ts";
const __dirname = stdPath.dirname(stdPath.fromFileUrl(import.meta.url));

export const getNavTemplatePath = (): string => {
  return `${__dirname}/widgets/nav.eta`;
};

export const getAddItemTemplatePath = (): string => {
  return `${__dirname}/widgets/add.eta`;
};

export const getWidgetCSSFilePath = (): string => {
  return `${__dirname}/css/widget.css`;
};
