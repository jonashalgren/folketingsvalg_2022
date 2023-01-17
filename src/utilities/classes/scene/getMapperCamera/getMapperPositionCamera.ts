import { interpolate } from "popmotion";
import type { S } from "@models";
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

  return function ({
    progressMain,
    progressEntry,
    progressExit,
    camera,
  }: {
    progressMain: number;
    progressEntry: number;
    progressExit: number;
    camera: PerspectiveCamera;
  }) {
    if (localProgress !== progressMain) {
      localProgress = progressMain;
      camera.position.set(...mapperMain(progressMain));
    }

    if (localExit !== progressExit) {
      localExit = progressExit;
      camera.position.set(...mapperExit(progressExit));
    }

    if (localEntry !== progressEntry) {
      localEntry = progressEntry;
      camera.position.set(...mapperEntry(progressEntry));
    }
  };
}
