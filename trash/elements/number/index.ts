import type { Motion, Mesh_Text } from "@models";
export type S_E_Number = {
  font: string;
  unit: string;
  animRange: {
    inputRange: number[];
    colorRange: string[];
    valueRange: number[];
    sizeRange: number[];
  };
  positionRange: Motion<[number, number, number]>;
  decimals: number;
  textAlign: "center" | "left" | "right";
  rotation: [number, number, number];
};

export type S_Number_Properties = {
  text: Mesh_Text;
};
