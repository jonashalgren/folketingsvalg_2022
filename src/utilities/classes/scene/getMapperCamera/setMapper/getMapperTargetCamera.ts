import type { S_Camera, S_Progress } from "@models";
import { interpolate } from "popmotion";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type Props = {
  camera: S_Camera;
};
export function getMapperTargetCamera({ camera }: Props) {
  let localProgress = 0;
  let localExit = undefined;
  let localEntry = undefined;

  const { inputRange, outputRange } = camera.targetMain;
  const { targetEntry, targetExit } = camera;

  const mapperMain = interpolate(inputRange, outputRange);
  const mapperExit = interpolate([0, 1], [outputRange[outputRange.length - 1], targetExit]);
  const mapperEntry = interpolate([0, 1], [targetEntry, outputRange[0]]);

  return function ({ progress, controls }: { progress: S_Progress; controls: OrbitControls }) {
    if (localProgress !== progress.main) {
      localProgress = progress.main;
      controls.target.set(...mapperMain(progress.main));
    }

    if (localExit !== progress.exit) {
      localExit = progress.exit;
      controls.target.set(...mapperExit(progress.exit));
    }

    if (localEntry !== progress.entry) {
      localEntry = progress.entry;
      controls.target.set(...mapperEntry(progress.entry));
    }
  };
}
