import type { S, CanvasProperties, S_Progress, P_Logo_Mesh, P_Leader_Mesh } from "@models";
import { setNGetScene, setNGetSceneCamera, getOutputOffsetZ, getChartValue } from "@helpers";
import { getAnimsMapper } from "./getAnimsMapper";
import { getAxis } from "./getAxis";
import { getLabel } from "./getLabel";
import { Color, Vector3 } from "three";
import * as THREE from "three";
import { threeProperties } from "@assets";
import { Text } from "troika-three-text";
import type { Group } from "three";

type Props = {
  data: S;
  sceneProgress: S_Progress;
  canvasProperties: CanvasProperties;
  canvasElement: HTMLCanvasElement;
  partyLogoMesh: P_Logo_Mesh[];
  partyLeaderMesh: P_Leader_Mesh[];
  partProperties: Group;
};

export function getLine({
  data,
  canvasElement,
  canvasProperties,
  sceneProgress,
  partyLogoMesh,
  partyLeaderMesh,
  partProperties,
}: Props) {
  const { height, width } = canvasProperties;
  const bbox = { x: 120, y: 120 };
  const camera = setNGetSceneCamera({ mapWidth: width, vh: height });
  const outputOffsetZ = getOutputOffsetZ({ camera, bbox });

  const radius = 1.1;
  const segments = 8;
  const lines = data.animConfigs.map((item, index) => {
    const material = new THREE.MeshBasicMaterial({ color: new Color(item.color), side: THREE.DoubleSide });
    const points = data.anims[index].points.map((item) => new Vector3(item[0], item[1], 0.2));
    const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.1);
    const geometry = new THREE.TubeGeometry(curve, 700, radius, segments);

    const chartText = new Text();
    const lastPoint = data.anims[index].points[data.anims[index].points.length - 1];
    const val = item.values[item.values.length - 1];
    chartText.text = getChartValue({ value: val, decimals: 1, unit: data?.unit ?? "" });
    chartText.font = threeProperties.font_publik;
    chartText.fontSize = 7;
    chartText.color = threeProperties.color_dark;
    chartText.anchorX = "right";
    chartText.anchorY = "top";
    chartText.position.set(lastPoint[0] + 3, lastPoint[1] - 0.5, lastPoint[2]);
    chartText.sync();
    chartText.material.transparent = true;
    chartText.userData.isVisible = false;
    chartText.userData.stayHidden = true;
    chartText.material.opacity = 0;
    chartText.color = item.color;

    material.visible = !item.isHidden;
    chartText.visible = !item.isHidden;
    return {
      line: new THREE.Mesh(geometry, material),
      text: chartText,
    };
  });

  const axis = getAxis({ anims: data.anims, data });
  const label = getLabel({ anims: data.anims, data });

  const animsMapper = getAnimsMapper({
    data,
    lines,
    mapper: () => {},
  }).mapper;

  return setNGetScene({
    animsMapper,
    partProperties,
    partyLogoMesh,
    canvasElement,
    canvasProperties,
    clonedMeshes: [...lines.flatMap((item) => [item.line, item.text]), axis, label],
    data,
    sceneProgress,
    outputOffsetZ,
    camera,
    partyLeaderMesh,
  });
}
