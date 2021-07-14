import vs from "https://deno.land/x/value_schema@v3.0.0/mod.ts";

const schemaObject = {
  name: vs.string({ minLength: 2 }),
  colors: vs.array({}),
  tags: vs.array({}),
  description: vs.string({
    minLength: 3,
  }),
};

export const validateMeta = (metaData: string): boolean => {
  let result = false;
  vs.applySchemaObject(
    schemaObject,
    metaData,
    ((error) => {
      result = !!error;
    }),
    (() => {
      return true;
    }),
  );
  return result;
};
