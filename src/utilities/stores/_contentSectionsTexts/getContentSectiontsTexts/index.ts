import { pipe } from "@helpers";
import { syncWithScenesSettings } from "./syncWithScenesSettings";
import { setContentSectionsTexts } from "./setContentSectionsTexts";
import { cleanupData } from "./cleanupData";
import type { C_Content_Settings } from "@models";

export type Props = {
  canvasScenesSettings: C_Content_Settings[];
  contentSectionsTexts?: string[][];
  responseData: { scenenr: string; tekst: string }[];
};
export const getContentSectiontsTexts = pipe(cleanupData, setContentSectionsTexts, syncWithScenesSettings);
