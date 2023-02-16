import type { Props } from "./index";

export function syncWithScenesSettings(item: Props): Props {
  return {
    ...item,
    contentSectionsTexts: item.scenesSettings.map((_, index) => {
      return item.contentSectionsTexts[index] ? item.contentSectionsTexts[index] : [""];
    }),
  };
}
