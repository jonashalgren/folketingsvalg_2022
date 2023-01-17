import type { S } from "@models";
import type { PerspectiveCamera } from "three";
import { getOutputItem } from "./getOutputItem";
import { getOutputList } from "./getOutputList";
import { getOutputOffsetZ } from "./getOutputOffsetZ";
type Props = {
  data: S;
  camera: PerspectiveCamera;
};

export function getProcessedData({ data, camera }: Props): S {
  const bbox = data.bbox ?? { x: 100, y: 100 };
  const outputOffsetZ = getOutputOffsetZ({ camera, bbox });
  return {
    ...data,
    outputOffsetZ,
    bbox,
    camera: {
      positionMain: {
        ...data.camera.positionMain,
        outputRange: getOutputList({ outputOffsetZ, output: data.camera.positionMain.outputRange }),
      },
      targetMain: {
        ...data.camera.targetMain,
        outputRange: getOutputList({ outputOffsetZ, output: data.camera.targetMain.outputRange }),
      },
      positionEntry: getOutputItem({ outputOffsetZ, output: data.camera.positionEntry }),
      targetEntry: getOutputItem({ outputOffsetZ, output: data.camera.targetEntry }),
      positionExit: getOutputItem({ outputOffsetZ, output: data.camera.positionExit }),
      targetExit: getOutputItem({ outputOffsetZ, output: data.camera.targetExit }),
    },
    elements: {
      ...data.elements,
      images: (data.elements?.images ?? []).map((item) => {
        return {
          ...item,
          positionRange: getOutputList({ outputOffsetZ, output: item.positionRange ?? [] }),
          scaleRange: getOutputList({ outputOffsetZ, output: item.scaleRange ?? [], isPDivided: true }),
        };
      }),
      logos: (data.elements?.logos ?? []).map((item) => {
        return {
          ...item,
          positionRange: getOutputList({ outputOffsetZ, output: item.positionRange ?? [] }),
          scaleRange: getOutputList({ outputOffsetZ, output: item.scaleRange ?? [], isPDivided: true }),
        };
      }),
      texts: (data.elements?.texts ?? []).map((item) => {
        return {
          ...item,
          position: getOutputItem({ outputOffsetZ, output: item.position }),
        };
      }),
      numbers: (data.elements?.numbers ?? []).map((item) => {
        return {
          ...item,
          positionRange: {
            ...item?.positionRange,
            outputRange: getOutputList({ outputOffsetZ, output: item?.positionRange.outputRange ?? [] }),
          },
        };
      }),
    },
  };
}
