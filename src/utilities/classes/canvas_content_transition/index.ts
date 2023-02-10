import { Color } from "three";
import { Canvas_Content_Transition_Square } from "@classes";
import { Canvas_Content_Element } from "@classes_abstract";
import type { C_C_S_Element_Transition } from "@models";
import { interpolate } from "popmotion";
import { transition_square_static_settings } from "@assets";

export class Canvas_Content_Transition extends Canvas_Content_Element<C_C_S_Element_Transition, undefined> {
  public transitionSettings: C_C_S_Element_Transition;

  private squares: Canvas_Content_Transition_Square[];
  private colorAlphaMapper: (progress: number) => number;

  static squaresSettings = transition_square_static_settings;
  static whiteColor = new Color("#ffffff");
  static blackColor = new Color("#000000");

  constructor(transitionSettings: C_C_S_Element_Transition) {
    super(transitionSettings, undefined, undefined, 0);
    this.transitionSettings = transitionSettings;
    this.colorAlphaMapper = interpolate([0, 0.3, 0.9, 1], [1, 0, 0, 1]);
    this.setSquares();
    this.addSquaresToGroup();
  }

  private setSquares() {
    this.squares = Canvas_Content_Transition.squaresSettings.map(({ color, positionOutputRange, rotationOutputRange }) => {
      return new Canvas_Content_Transition_Square(color, Canvas_Content_Transition.whiteColor, Canvas_Content_Transition.blackColor, positionOutputRange, rotationOutputRange);
    });
  }

  private addSquaresToGroup() {
    this.squares.forEach((square) => {
      this.group.add(square.mesh);
    });
  }

  resize(): void {}

  animate(_: number, entryProgress: number) {
    if (this.localProgress !== entryProgress) {
      this.localProgress = entryProgress;
      const colorAlpha = this.colorAlphaMapper(entryProgress);
      this.squares.forEach((square: Canvas_Content_Transition_Square) => {
        square.animate(entryProgress, colorAlpha);
      });
    }
  }
}
