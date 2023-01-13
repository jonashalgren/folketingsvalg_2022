export type S_E_Text = {
  font: string;
  text: string;
  fontSize: number;
  maxWidth: number;
  textAlign: "center" | "left" | "right";
  rotation: [number, number, number];
  position: [number, number, number];
  color: string;
  isResponsive?: boolean;
};
