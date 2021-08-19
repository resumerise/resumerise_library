import __ from "https://deno.land/x/dirname@1.1.2/mod.ts";
import { Resume } from "./codegen/model/resume.ts";
const { __dirname } = __(import.meta);

export const getDefaultResume = (): Resume => {
  return JSON.parse(
    Deno.readTextFileSync(`${__dirname}/resume.json`),
  ) as Resume;
};
