import type { S } from "@models";
import { interpolate } from "popmotion";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type Props = {
  data: S;
};

export function getCameraTargetMapper({ data }: Props) {
  const { inputRange, outputRange } = data.cameraTarget;
  const { entryTarget, exitTarget } = data.transition;

  const progressMapper = interpolate(inputRange, outputRange);
  const exitMapper = interpolate([0, 1], [outputRange[outputRange.length - 1], exitTarget]);
  const entryMapper = interpolate([0, 1], [entryTarget, outputRange[0]]);

  let localProgress = 0;
  let localExit = undefined;
  let localEntry = undefined;
  return {
    cameraMainTargetMapper: function ({ progress, controls }: { progress: number; controls: OrbitControls }) {
      if (localProgress !== progress) {
        localProgress = progress;
        controls.target.set(...progressMapper(progress));
      }
    },
    cameraExitTargetMapper: function ({ progress, controls }: { progress: number; controls: OrbitControls }) {
      if (localExit !== progress) {
        localExit = progress;
        controls.target.set(...exitMapper(progress));
      }
    },
    cameraEntryTargetMapper: function ({
      progress,
      controls,
    }: {
      progress: number;
      controls: OrbitControls;
    }) {
      if (localEntry !== progress) {
        localEntry = progress;
        controls.target.set(...entryMapper(progress));
      }
    },
  };
}
