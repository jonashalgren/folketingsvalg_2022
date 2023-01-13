import type { S } from "@models";
import { getOutputItem, getOutputList } from "@helpers";

type Props = {
  data: S;
  outputOffsetZ: number;
};

export function getPerspectiveData({ data, outputOffsetZ }: Props): S {
  return {
    ...data,
    cameraPosition: {
      ...data.cameraPosition,
      outputRange: getOutputList({ outputOffsetZ, output: data.cameraPosition.outputRange }),
    },
    cameraTarget: {
      ...data.cameraTarget,
      outputRange: getOutputList({ outputOffsetZ, output: data.cameraTarget.outputRange }),
    },
    transition: {
      entryPosition: getOutputItem({ outputOffsetZ, output: data.transition.entryPosition }),
      entryTarget: getOutputItem({ outputOffsetZ, output: data.transition.entryTarget }),
      exitPosition: getOutputItem({ outputOffsetZ, output: data.transition.exitPosition }),
      exitTarget: getOutputItem({ outputOffsetZ, output: data.transition.exitTarget }),
    },
    partyLeader: (data?.partyLeader ?? []).map((item) => {
      return {
        ...item,
        positionRange: getOutputList({ outputOffsetZ, output: item.positionRange ?? [] }),
        scaleRange: getOutputList({ outputOffsetZ, output: item.scaleRange ?? [], isPDivided: true }),
      };
    }),
    partyLogo: (data?.partyLogo ?? []).map((item) => {
      return {
        ...item,
        positionRange: getOutputList({ outputOffsetZ, output: item.positionRange ?? [] }),
        scaleRange: getOutputList({ outputOffsetZ, output: item.scaleRange ?? [], isPDivided: true }),
      };
    }),
    text: (data?.text ?? []).map((item) => {
      return {
        ...item,
        position: getOutputItem({ outputOffsetZ, output: item.position }),
      };
    }),
    number: (data?.number ?? []).map((item) => {
      return {
        ...item,
        positionRange: {
          ...item?.positionRange,
          outputRange: getOutputList({ outputOffsetZ, output: item?.positionRange.outputRange ?? [] }),
        },
      };
    }),
  };
}
