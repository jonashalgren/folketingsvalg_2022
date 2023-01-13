import { interpolate } from "popmotion";
import type { S } from "@models";
import type { PerspectiveCamera } from "three";

type Props = {
  data: S;
};

export function getCameraPositionMapper({ data }: Props) {
  let localProgress = 0;
  let localExit = undefined;
  let localEntry = undefined;

  const { outputRange, inputRange } = data.cameraPosition;
  const { entryPosition, exitPosition } = data.transition;

  const progressMapper = interpolate(inputRange, outputRange);

  const exitMapper = interpolate([0, 1], [outputRange[outputRange.length - 1], exitPosition]);

  const entryMapper = interpolate([0, 1], [entryPosition, outputRange[0]]);

  return {
    cameraMainPositionMapper: function ({
      progress,
      camera,
    }: {
      progress: number;
      camera: PerspectiveCamera;
    }) {
      if (localProgress !== progress) {
        localProgress = progress;
        camera.position.set(...progressMapper(progress));
      }
    },
    cameraExitPositionMapper: function ({
      progress,
      camera,
    }: {
      progress: number;
      camera: PerspectiveCamera;
    }) {
      if (localExit !== progress) {
        localExit = progress;
        camera.position.set(...exitMapper(progress));
      }
    },
    cameraEntryPositionMapper: function ({
      progress,
      camera,
    }: {
      progress: number;
      camera: PerspectiveCamera;
    }) {
      if (localEntry !== progress) {
        localEntry = progress;
        camera.position.set(...entryMapper(progress));
      }
    },
  };
}
