import { pipe } from "@helpers";
import { syncWithSceneSettings } from "./syncWithSceneSettings";
import { setContentSectionsTexts } from "./setContentSectionsTexts";
import { cleanupData } from "./cleanupData";
import type { S_Settings } from "@models";

export type Props = {
  scenesSettings: S_Settings[];
  contentSectionsTexts?: string[][];
  responseData: { scenenr: string; tekst: string }[];
};
export const getContentSectiontsTexts = pipe(cleanupData, setContentSectionsTexts, syncWithSceneSettings);
