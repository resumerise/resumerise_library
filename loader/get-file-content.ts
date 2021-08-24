// use polyfill to load file with file:/// and href://
import "https://deno.land/x/file_fetch@0.2.0/polyfill.ts";

export const getFileContent = async (
  path: string,
  baseUrl: string,
): Promise<string> => {
  return (await (await globalThis.fetch(
    new URL(
      path,
      baseUrl,
    ).href,
  )).text());
};
