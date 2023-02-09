import type { Props } from "./index";

export function syncWithContentSettings(item: Props): Props {
  return {
    ...item,
    contentSectionsTexts: item.contentSettingsList.map((_, index) => {
      return item.contentSectionsTexts[index] ? item.contentSectionsTexts[index] : [""];
    }),
  };
}
