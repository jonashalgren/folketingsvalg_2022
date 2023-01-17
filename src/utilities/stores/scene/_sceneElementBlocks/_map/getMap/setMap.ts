import type { Props } from "./index";
import { Group } from "three";

export function setMap(item: Props) {
  const group = new Group();

  const areaGroups = item.areaMeshes.map((entry) => {
    const areaGroup = new Group();
    areaGroup.userData.areaId = entry[0].userData.areaId;
    areaGroup.add(...entry);
    return areaGroup;
  });

  group.add(...areaGroups);

  return {
    ...item,
    map: group,
  };
}
