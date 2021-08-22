// deno-lint-ignore-file

export const getNavTemplatePath = (): string => {
  return Deno.readTextFileSync(
    `${new URL("./widgets/nav.eta", import.meta.url).pathname}`,
  );
};

export const getAddItemTemplatePath = (): string => {
  return Deno.readTextFileSync(
    `${new URL("./widgets/add.eta", import.meta.url).pathname}`,
  );
};

export const getWidgetCSSFilePath = (): string => {
  return Deno.readTextFileSync(
    `${new URL("./css/widget.css", import.meta.url).pathname}`,
  );
};
