import vs from "https://deno.land/x/value_schema/mod.ts";
import { FromSchema } from "https://deno.land/x/json_schema_to_ts@v1.6.5-beta.1/index.d.ts";

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

type Resume = FromSchema<typeof schemaObject>;
