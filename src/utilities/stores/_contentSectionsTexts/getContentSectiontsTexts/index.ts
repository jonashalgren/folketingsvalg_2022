import { pipe } from "@helpers";
import { syncWithScenesSettings } from "./syncWithScenesSettings";
import { setContentSectionsTexts } from "./setContentSectionsTexts";
import { cleanupData } from "./cleanupData";
import type { C_Scene_Settings } from "@models";

export type Props = {
  scenesSettings: C_Scene_Settings[];
  contentSectionsTexts?: string[][];
  responseData: { scenenr: string; tekst: string }[];
};
export const getContentSectiontsTexts = pipe(cleanupData, setContentSectionsTexts, syncWithScenesSettings);
