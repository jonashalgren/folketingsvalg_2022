import type { ER, S_Map_Anim_Config_Blank, S_Map_Anim } from "@models";
import { threeProperties } from "@assets";

type Props = {
  animConfig: S_Map_Anim_Config_Blank;
  electionResult: ER;
};

export function getBlank({ animConfig, electionResult }: Props): S_Map_Anim[] {
  return electionResult.map(({ id }) => {
    return {
      areaId: id,
      value: {
        inputRange: animConfig.inputRange,
        outputRange: [0, 0],
      },
      color: {
        inputRange: animConfig.inputRange,
        outputRange: [
          animConfig?.color ?? threeProperties.color_neutral,
          animConfig?.color ?? threeProperties.color_neutral,
        ],
      },
      party: {
        inputRange: animConfig.inputRange,
        outputRange: ["", ""],
      },
    };
  });
}
