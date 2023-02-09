import type { Props } from "./index";
import { getElementOffsets } from "@helpers";

export function setProgressSettings(item: Props) {
  const sceneOffsetList = item.contentSettingsList.map((_, index) => {
    const element = item.contentDOMElement.children[index] as HTMLDivElement;
    const { elementOffsetTop, elementOffsetBottom } = getElementOffsets({ element });
    return { top: elementOffsetTop, bottom: elementOffsetBottom - item.viewport.h };
  });

  return {
    ...item,
    contentSettingsList: item.contentSettingsList.map((contentSettings, index) => {
      const prevOffsets = sceneOffsetList[index - 1] ? sceneOffsetList[index - 1] : sceneOffsetList[index];
      const offsets = sceneOffsetList[index];
      const nextOffsets = sceneOffsetList[index + 1] ? sceneOffsetList[index + 1] : sceneOffsetList[index];
      return {
        ...contentSettings,
        progressSettings: {
          mainStart: offsets.top,
          mainEnd: offsets.bottom,
          entryStart: offsets.top === 0 ? offsets.top : Math.round(prevOffsets.bottom),
          exitEnd: Math.round((offsets.bottom + nextOffsets.top) / 2),
        },
      };
    }),
  };
}