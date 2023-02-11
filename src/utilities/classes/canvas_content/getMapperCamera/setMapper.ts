import type { Props } from "./index";
import { interpolate } from "popmotion";
import type { C_Content_Progress } from "@models";

export function setMapper(item: Props): Props {
  const { cameraSettings } = item;

  const mapperPositionMain = interpolate(cameraSettings.positionMain.inputRange, cameraSettings.positionMain.outputRange);
  const mapperPositionExit = interpolate([0, 1], [cameraSettings.positionMain.outputRange[cameraSettings.positionMain.outputRange.length - 1], cameraSettings.positionExit]);
  const mapperPositionEntry = interpolate([0, 1], [cameraSettings.positionEntry, cameraSettings.positionMain.outputRange[0]]);
  const mapperTargetMain = interpolate(cameraSettings.targetMain.inputRange, cameraSettings.targetMain.outputRange);
  const mapperTargetExit = interpolate([0, 1], [cameraSettings.targetMain.outputRange[cameraSettings.targetMain.outputRange.length - 1], cameraSettings.targetExit]);
  const mapperTargetEntry = interpolate([0, 1], [cameraSettings.targetEntry, cameraSettings.targetMain.outputRange[0]]);

  return {
    ...item,
    mapper: function (progress: C_Content_Progress) {
      return {
        positionMain: mapperPositionMain(progress.main),
        positionEntry: mapperPositionEntry(progress.entry),
        positionExit: mapperPositionExit(progress.exit),
        targetMain: mapperTargetMain(progress.main),
        targetEntry: mapperTargetEntry(progress.entry),
        targetExit: mapperTargetExit(progress.exit),
      };
    },
  };
}
