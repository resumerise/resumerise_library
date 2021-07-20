import { ResumeriseMeta } from "../models/resumerise-meta.ts";

export interface ThemeAction {
  render(
    jsonResume: string,
    type: string,
  ): Promise<string>;
  getMeta(): ResumeriseMeta;
}
