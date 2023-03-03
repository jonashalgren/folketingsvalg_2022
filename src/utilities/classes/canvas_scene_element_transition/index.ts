import { Color } from "three";
import { Canvas_Scene_Element_Transition_Square } from "@classes";
import { Canvas_Scene_Element } from "@classes_abstract";
import type { C_S_E_Mesh_Transition, C_S_S_Element_Transition } from "@models";
import { interpolate } from "popmotion";
import { transition_squares_settings } from "@assets";

type Props = {
  elementSettings: C_S_S_Element_Transition;
};

export class Canvas_Scene_Element_Transition extends Canvas_Scene_Element<C_S_S_Element_Transition, C_S_E_Mesh_Transition[]> {
  private squares: Canvas_Scene_Element_Transition_Square[];
  private colorAlphaMapper: (progress: number) => number;

  static squaresSettings = transition_squares_settings;
  static whiteColor = new Color("#ffffff");
  static blackColor = new Color("#000000");

  constructor(props: Props) {
    super(props);
    this.colorAlphaMapper = interpolate([0, 0.3, 0.9, 1], [1, 0, 0, 1]);
    this.setSquares();
    this.addSquaresToMeshes();
  }

  private setSquares() {
    this.squares = Canvas_Scene_Element_Transition.squaresSettings.map(({ color, positionOutputRange, rotationOutputRange }) => {
      return new Canvas_Scene_Element_Transition_Square({
        color,
        whiteColor: Canvas_Scene_Element_Transition.whiteColor,
        blackColor: Canvas_Scene_Element_Transition.blackColor,
        positionOutputRange,
        rotationOutputRange,
      });
    });
  }

  private addSquaresToMeshes() {
    this.meshes.push(...this.squares.flatMap((item) => item.mesh));
  }

  resize(): void {}

  animate(_: number, entryProgress: number) {
    const colorAlpha = this.colorAlphaMapper(entryProgress);
    this.squares.forEach((square: Canvas_Scene_Element_Transition_Square) => {
      square.animate(entryProgress, colorAlpha);
    });
  }
}
