import __ from "https://deno.land/x/dirname@1.1.2/mod.ts"
const { __dirname } = __(import.meta);

export const getDefaultResume = (): string => {
  return Deno.readTextFileSync(`${__dirname}/resume.json`);
};
