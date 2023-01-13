import type {
  S,
  S_Overview_Properties,
  S_Map_Properties,
  CanvasProperties,
  S_Progress,
  S_Number_Properties,
  P_Logo_Mesh,
  P_Leader_Mesh,
} from "@models";
import type { S_Three } from "@models";
import { getMap } from "./getMap";
import { getOverview } from "./getOverview";
import { getNumber } from "./getNumber";
import { getLine } from "./getLine";
import { getBlank } from "./getBlank";
import type { Group } from "three";

type Props = {
  sceneData: S[];
  overviewProperties: S_Overview_Properties;
  mapProperties: S_Map_Properties;
  numberProperties: S_Number_Properties;
  canvasProperties: CanvasProperties;
  canvasElement: HTMLCanvasElement;
  sceneProgress: S_Progress[];
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  partProperties: Group;
};

export function getSceneThree({
  sceneData,
  canvasProperties,
  canvasElement,
  mapProperties,
  overviewProperties,
  sceneProgress,
  numberProperties,
  partyLogoMesh,
  partyLeaderMesh,
  partProperties,
}: Props): S_Three[] {
  return sceneData.map((item, index) => {
    switch (item.sceneVariant) {
      case "map":
        return getMap({
          data: item,
          sceneProgress: sceneProgress[index],
          mapProperties,
          canvasProperties,
          canvasElement,
          partyLogoMesh,
          partyLeaderMesh,
          partProperties,
        });
      case "overview":
        return getOverview({
          data: item,
          sceneProgress: sceneProgress[index],
          overviewProperties,
          canvasProperties,
          canvasElement,
          partyLogoMesh,
          partyLeaderMesh,
          partProperties,
        });
      case "number":
        return getNumber({
          data: item,
          sceneProgress: sceneProgress[index],
          numberProperties,
          canvasProperties,
          canvasElement,
          partyLogoMesh,
          partyLeaderMesh,
          partProperties,
        });
      case "line":
        return getLine({
          data: item,
          sceneProgress: sceneProgress[index],
          canvasProperties,
          canvasElement,
          partyLogoMesh,
          partyLeaderMesh,
          partProperties,
        });
      case "blank":
        return getBlank({
          data: item,
          sceneProgress: sceneProgress[index],
          canvasProperties,
          canvasElement,
          partyLogoMesh,
          partyLeaderMesh,
          partProperties,
        });

      default:
        break;
    }
  });
}
