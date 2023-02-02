import { interpolate } from "popmotion";
import type { S_Progress, S_S_Camera } from "@models";
import type { PerspectiveCamera } from "three";

type Props = {
  cameraSettings: S_S_Camera;
};

export function getMapperPositionCamera({ cameraSettings }: Props) {
  let localProgress = 0;
  let localExit = undefined;
  let localEntry = undefined;

  const { outputRange, inputRange } = cameraSettings.positionMain;
  const { positionEntry, positionExit } = cameraSettings;

  const mapperMain = interpolate(inputRange, outputRange);
  const mapperExit = interpolate([0, 1], [outputRange[outputRange.length - 1], positionExit]);
  const mapperEntry = interpolate([0, 1], [positionEntry, outputRange[0]]);

  return function ({ progress, camera }: { progress: S_Progress; camera: PerspectiveCamera }) {
    if (localProgress !== progress.main) {
      localProgress = progress.main;
      camera.position.set(...mapperMain(progress.main));
    }

    if (localExit !== progress.exit) {
      localExit = progress.exit;
      camera.position.set(...mapperExit(progress.exit));
    }

    if (localEntry !== progress.entry) {
      localEntry = progress.entry;
      camera.position.set(...mapperEntry(progress.entry));
    }
  };
}