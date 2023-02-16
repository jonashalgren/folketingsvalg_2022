import { Color } from "three";
import { Canvas_Scene_Element_Transition_Square } from "@classes";
import { Canvas_Scene_Element } from "@classes_abstract";
import type { C_C_E_Mesh_Transition, C_C_S_Element_Transition } from "@models";
import { interpolate } from "popmotion";
import { transition_square_static_settings } from "@assets";

export class Canvas_Scene_Element_Transition extends Canvas_Scene_Element<C_C_S_Element_Transition, C_C_E_Mesh_Transition[]> {
  public transitionSettings: C_C_S_Element_Transition;

  private squares: Canvas_Scene_Element_Transition_Square[];
  private colorAlphaMapper: (progress: number) => number;

  static squaresSettings = transition_square_static_settings;
  static whiteColor = new Color("#ffffff");
  static blackColor = new Color("#000000");

  constructor(transitionSettings: C_C_S_Element_Transition) {
    super(transitionSettings, [], undefined, 0);
    this.transitionSettings = transitionSettings;
    this.colorAlphaMapper = interpolate([0, 0.3, 0.9, 1], [1, 0, 0, 1]);
    this.setSquares();
    this.addSquaresToMeshes();
  }

  private setSquares() {
    this.squares = Canvas_Scene_Element_Transition.squaresSettings.map(({ color, positionOutputRange, rotationOutputRange }) => {
      return new Canvas_Scene_Element_Transition_Square(
        color,
        Canvas_Scene_Element_Transition.whiteColor,
        Canvas_Scene_Element_Transition.blackColor,
        positionOutputRange,
        rotationOutputRange
      );
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
