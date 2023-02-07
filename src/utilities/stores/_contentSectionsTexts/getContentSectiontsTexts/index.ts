import { pipe } from "@helpers";
import { syncWithSceneSettings } from "./syncWithSceneSettings";
import { setContentSectionsTexts } from "./setContentSectionsTexts";
import { cleanupData } from "./cleanupData";
import type { C_S_Settings } from "@models";

export type Props = {
  scenesSettings: C_S_Settings[];
  contentSectionsTexts?: string[][];
  responseData: { scenenr: string; tekst: string }[];
};
export const getContentSectiontsTexts = pipe(cleanupData, setContentSectionsTexts, syncWithSceneSettings);
