import { Resume } from "./codegen/model/resume.ts";

export const getDefaultResume = (): Resume => {
  return JSON.parse(
    Deno.readTextFileSync(new URL("./resume.json", import.meta.url).pathname),
  ) as Resume;
};
