import type { C_C_Settings_Camera, C_Content_Progress } from "@models";
import { interpolate } from "popmotion";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type Props = {
  cameraSettings: C_C_Settings_Camera;
};
export function getMapperTargetCamera({ cameraSettings }: Props) {
  let localProgress = 0;
  let localExit = undefined;
  let localEntry = undefined;

  const { inputRange, outputRange } = cameraSettings.targetMain;
  const { targetEntry, targetExit } = cameraSettings;

  const mapperMain = interpolate(inputRange, outputRange);
  const mapperExit = interpolate([0, 1], [outputRange[outputRange.length - 1], targetExit]);
  const mapperEntry = interpolate([0, 1], [targetEntry, outputRange[0]]);

  return function ({ progress, controls }: { progress: C_Content_Progress; controls: OrbitControls }) {
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
