import type { TextSectionOffset, ElementOffset } from "@models";

type Props = {
  textElementChildrenOffsets: ElementOffset[];
};

export function getTextSectionsOffsets({ textElementChildrenOffsets }: Props): TextSectionOffset[] {
  return textElementChildrenOffsets.map(({ top, bottom }, index) => {
    const nextProgressMainStart = textElementChildrenOffsets[index + 1]?.top ?? bottom + 500;
    const lastProgressMainEnd = textElementChildrenOffsets[index - 1]?.bottom ?? 0;
    return {
      progressMainStart: top,
      progressMainEnd: bottom,
      progressEntryStart: index === 0 ? top : Math.round(lastProgressMainEnd),
      progressExitEnd: Math.round((bottom + nextProgressMainStart) / 2),
      top: Math.round((lastProgressMainEnd + top) / 2),
      bottom: Math.round((bottom + nextProgressMainStart) / 2),
    };
  });
}
