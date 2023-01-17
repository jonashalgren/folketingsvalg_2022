import { interpolate } from "popmotion";
import type { S, S_Progress } from "@models";
import type { PerspectiveCamera } from "three";

type Props = {
  data: S;
};

export function getMapperPositionCamera({ data }: Props) {
  let localProgress = 0;
  let localExit = undefined;
  let localEntry = undefined;

  const { outputRange, inputRange } = data.camera.positionMain;
  const { positionEntry, positionExit } = data.camera;

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
