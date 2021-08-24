import { Resume } from "./codegen/model/resume.ts";
import { getFileContent } from "./mod.ts";

export const getDefaultResume = async (): Promise<Resume> => {
  return JSON.parse(
    await getFileContent("./resume.json", import.meta.url),
  ) as Resume;
};
