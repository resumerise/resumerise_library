export const getDefaultResume = (): string => {
  return Deno.readTextFileSync("./resume.json");
};
