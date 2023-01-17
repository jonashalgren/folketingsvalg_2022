import type { S } from "@models";
import { interpolate } from "popmotion";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type Props = {
  data: S;
};

export function getMapperTargetCamera({ data }: Props) {
  let localProgress = 0;
  let localExit = undefined;
  let localEntry = undefined;

  const { inputRange, outputRange } = data.camera.targetMain;
  const { targetEntry, targetExit } = data.camera;

  const mapperMain = interpolate(inputRange, outputRange);
  const mapperExit = interpolate([0, 1], [outputRange[outputRange.length - 1], targetExit]);
  const mapperEntry = interpolate([0, 1], [targetEntry, outputRange[0]]);

  return function ({
    progressMain,
    progressEntry,
    progressExit,
    controls,
  }: {
    progressMain: number;
    progressEntry: number;
    progressExit: number;
    controls: OrbitControls;
  }) {
    if (localProgress !== progressMain) {
      localProgress = progressMain;
      controls.target.set(...mapperMain(progressMain));
    }

    if (localExit !== progressExit) {
      localExit = progressExit;
      controls.target.set(...mapperExit(progressExit));
    }

    if (localEntry !== progressEntry) {
      localEntry = progressEntry;
      controls.target.set(...mapperEntry(progressEntry));
    }
  };
}
