import type { TextSectionOffset, ElementOffset } from "@models";

type Props = {
  textElementChildrenOffsets: ElementOffset[];
};

export function getTextSectionsOffsets({ textElementChildrenOffsets }: Props): TextSectionOffset[] {
  return textElementChildrenOffsets.map(({ top, bottom }, index) => {
    const nextTextIntro = textElementChildrenOffsets[index + 1]?.top ?? bottom + 500;
    const nextTextOutro = textElementChildrenOffsets[index + 1]?.bottom ?? nextTextIntro + 500;
    const lastTextBottom = textElementChildrenOffsets[index - 1]?.bottom ?? 0;
    return {
      textIntro: top,
      textOutro: bottom,
      sectionDeactivate: Math.round((bottom + nextTextIntro) / 2),
      nextTextIntro,
      nextTextOutro,
      entryStart: index === 0 ? top : Math.round(lastTextBottom),
      exitEnd: Math.round((bottom + nextTextIntro) / 2),
      top: Math.round((lastTextBottom + top) / 2),
      bottom: Math.round((bottom + nextTextIntro) / 2),
    };
  });
}
