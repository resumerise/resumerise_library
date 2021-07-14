import { ResumeriseMeta } from "../models/resumerise-meta.ts";

export interface ThemeAction {
  render(
    jsonResume: string,
    type: string,
  ): Promise<string>;
  get schema(): ResumeriseMeta;
}
