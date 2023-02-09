import { Color } from "three";
import { Canvas_Scene_Element_Transition_Square } from "@classes";
import { Canvas_Content_Element } from "@abstract_classes";
import type { C_S_S_E_Transition } from "@models";
import { interpolate } from "popmotion";

export class Canvas_Scene_Element_Transition extends Canvas_Content_Element<C_S_S_E_Transition, undefined> {
  private whiteColor: Color;
  private blackColor: Color;
  private squaresSettings: any[];
  private squares: Canvas_Scene_Element_Transition_Square[];
  private colorAlphaMapper: (progress: number) => number;

  constructor(public transitionSettings: C_S_S_E_Transition) {
    super(transitionSettings, undefined, undefined);
    this.whiteColor = new Color("#ffffff");
    this.blackColor = new Color("#000000");
    this.colorAlphaMapper = interpolate([0, 0.3, 0.9, 1], [1, 0, 0, 1]);

    this.setSquaresSettings();
    this.setSquares();
    this.addSquaresToGroup();
  }

  private setSquaresSettings() {
    this.squaresSettings = [
      {
        color: new Color("#e6ce51"),
        positionOutputRange: [
          [2, 7, 5],
          [-260, 250, 20],
        ],
        rotationOutputRange: [
          [0, 0, 0],
          [0.2, 0.2, -0.5],
        ],
      },
      {
        color: new Color("#ba51b7"),
        positionOutputRange: [
          [-10, -5, 12],
          [240, 250, 30],
        ],
        rotationOutputRange: [
          [0, 0, 0],
          [0.4, -0.2, 0.5],
        ],
      },
      {
        color: new Color("#26d6d2"),
        positionOutputRange: [
          [10, -13, 19],
          [-50, -250, 40],
        ],
        rotationOutputRange: [
          [0, 0, 0],
          [-0.2, 0.2, -0.5],
        ],
      },
    ];
  }

  private setSquares() {
    this.squares = this.squaresSettings.map(({ color, positionOutputRange, rotationOutputRange }) => {
      return new Canvas_Scene_Element_Transition_Square(color, this.whiteColor, this.blackColor, positionOutputRange, rotationOutputRange);
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
      this.squares.forEach((square: Canvas_Scene_Element_Transition_Square) => {
        square.animate(entryProgress, colorAlpha);
      });
    }
  }
}
