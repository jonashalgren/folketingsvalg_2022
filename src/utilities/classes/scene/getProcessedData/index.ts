import type { S } from "@models";
import { getOutputItem } from "./getOutputItem";
import { getOutputList } from "./getOutputList";

type Props = {
  data: S;
  outputOffsetZ: number;
};

export function getProcessedData({ data, outputOffsetZ }: Props): S {
  const { elements, camera } = data;
  return {
    ...data,
    camera: {
      position: {
        ...camera.position,
        outputRange: getOutputList({ outputOffsetZ, output: camera.position.outputRange }),
      },
      target: {
        ...camera.target,
        outputRange: getOutputList({ outputOffsetZ, output: camera.target.outputRange }),
      },
      entryPosition: getOutputItem({ outputOffsetZ, output: camera.entryPosition }),
      entryTarget: getOutputItem({ outputOffsetZ, output: camera.entryTarget }),
      exitPosition: getOutputItem({ outputOffsetZ, output: camera.exitPosition }),
      exitTarget: getOutputItem({ outputOffsetZ, output: camera.exitTarget }),
    },
    elements: {
      image: (elements?.image ?? []).map((item) => {
        return {
          ...item,
          positionRange: getOutputList({ outputOffsetZ, output: item.positionRange ?? [] }),
          scaleRange: getOutputList({ outputOffsetZ, output: item.scaleRange ?? [], isPDivided: true }),
        };
      }),
      logo: (elements?.logo ?? []).map((item) => {
        return {
          ...item,
          positionRange: getOutputList({ outputOffsetZ, output: item.positionRange ?? [] }),
          scaleRange: getOutputList({ outputOffsetZ, output: item.scaleRange ?? [], isPDivided: true }),
        };
      }),
      text: (elements?.text ?? []).map((item) => {
        return {
          ...item,
          position: getOutputItem({ outputOffsetZ, output: item.position }),
        };
      }),
      number: (elements?.number ?? []).map((item) => {
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
