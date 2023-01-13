import type { S_Overview_Properties, P_Logo_Mesh } from "@models";

type Props = {
  party: P_Logo_Mesh;
  overviewProperties?: S_Overview_Properties;
  y: number;
};

export function getLogo({ party, y, overviewProperties }: Props) {
  party.group.scale.set(0.049, 0.049, 0.1);
  party.group.scale.y = party.group.scale.y * -1;
  party.group.position.set(-17.5, y + overviewProperties.barHeight, 0);
  return party.group;
}
