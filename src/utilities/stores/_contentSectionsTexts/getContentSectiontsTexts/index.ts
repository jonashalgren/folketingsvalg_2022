import { pipe } from "@helpers";
import { syncWithContentSettings } from "./syncWithContentSettings";
import { setContentSectionsTexts } from "./setContentSectionsTexts";
import { cleanupData } from "./cleanupData";
import type { C_Content_Settings } from "@models";

export type Props = {
  contentSettingsList: C_Content_Settings[];
  contentSectionsTexts?: string[][];
  responseData: { scenenr: string; tekst: string }[];
};
export const getContentSectiontsTexts = pipe(cleanupData, setContentSectionsTexts, syncWithContentSettings);
