import type { Props } from "../index";
import { interpolate, snap } from "popmotion";
import type { S_Anims_Mappers } from "@models";
import { animateMiniTextMesh } from "./animateMiniText";

export function setMapper(item: Props) {
  let localProgress = undefined;

  const properties = item.data.animConfigs.map((entry, index) => {
    return {
      line: item.lines[index].line,
      text: item.lines[index].text,
      endPos: entry.inputRange[1],
      mapper: interpolate(entry.inputRange, [0, 1]),
      snapTo: snap(item.lines[index].line.geometry.index.count / 100),
      verticeCount: item.lines[index].line.geometry.index.count,
    };
  });

  return {
    ...item,
    mapper: function ({ progress }: S_Anims_Mappers) {
      if (localProgress !== progress) {
        localProgress = progress;
        properties.forEach((item) => {
          const val = item.mapper(progress);
          item.line.geometry.setDrawRange(0, item.snapTo(val * item.verticeCount));
          animateMiniTextMesh({ text: item.text, endPos: item.endPos, progress });
        });
      }
    },
  };
}
