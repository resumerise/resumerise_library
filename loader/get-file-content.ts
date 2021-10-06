// use polyfill to load file with file:/// and href://
import "https://deno.land/x/file_fetch@0.2.0/polyfill.ts";
import { cache } from "https://deno.land/x/cache@0.2.13/mod.ts";

export const getFileContent = async (
  path: string,
  baseUrl: string,
): Promise<string> => {
  const fileUrl = new URL(path, baseUrl).href;
  if (fileUrl.search("file:///") >= 0) {
    return Deno.readTextFileSync(fileUrl.replace("file:///", "/"));
  }
  const file = await cache(fileUrl);
  return Deno.readTextFileSync(file.path);
};
