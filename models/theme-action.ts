import { Resume } from "../codegen/models/model/resume.ts";
import { ResumeriseMeta } from "../models/resumerise-meta.ts";

export interface ThemeAction {
  render(
    resume: Resume,
    type: string,
  ): Promise<string>;
  getMeta(): ResumeriseMeta;
}
