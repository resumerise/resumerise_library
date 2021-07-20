import vs from "https://deno.land/x/value_schema@v3.0.0/mod.ts";
import { ResumeriseMeta } from "../mod.ts";

const schemaObject = {
  name: vs.string({ minLength: 2 }),
  description: vs.string({
    minLength: 3,
  }),
};

export const validateMeta = (metaData: ResumeriseMeta): boolean => {
  let result = false;
  vs.applySchemaObject(
    schemaObject,
    metaData,
    ((error) => {
      console.log(error);
      result = !!error;
    }),
    (() => {
      return true;
    }),
  );
  return result;
};
