import { Resume } from "../codegen/models/model/resume.ts";
import { ResumeriseMeta } from "../models/resumerise-meta.ts";
import { DocType } from "./doc-type.model.ts";

export interface ThemeAction {
  render(
    resume: Resume,
    type: DocType,
  ): Promise<string>;
  getMeta(): ResumeriseMeta;
}
