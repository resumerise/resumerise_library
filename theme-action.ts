import { ResumeriseMeta } from "./schema.ts";

export interface ThemeAction {
  render(
    jsonResume: string,
    type: string,
  ): string | Promise<string> | void;
  get schema(): ResumeriseMeta;
}
