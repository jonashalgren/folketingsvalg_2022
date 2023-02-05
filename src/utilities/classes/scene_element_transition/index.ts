import { Group, Color } from "three";
import { Scene_Element_Transition_Square, Scene_Element } from "@classes";
import type { S_S_E_Transition } from "@models";
import { interpolate } from "popmotion";

export class Scene_Element_Transition extends Scene_Element<S_S_E_Transition, undefined> {
  whiteColor: Color;
  blackColor: Color;
  squaresSettings: any[];
  squares: Scene_Element_Transition_Square[];
  colorAlphaMapper: (progress: number) => number;

  constructor(public transitionSettings: S_S_E_Transition) {
    super(transitionSettings, undefined, undefined);
    this.whiteColor = new Color("#ffffff");
    this.blackColor = new Color("#000000");
    this.colorAlphaMapper = interpolate([0, 0.3, 0.9, 1], [1, 0, 0, 1]);

    this.setSquaresSettings();
    this.setSquares();
    this.addSquaresToGroup();
    this.setAnimate();
  }

  setSquaresSettings() {
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

  setSquares() {
    this.squares = this.squaresSettings.map(({ color, positionOutputRange, rotationOutputRange }) => {
      return new Scene_Element_Transition_Square(
        color,
        this.whiteColor,
        this.blackColor,
        positionOutputRange,
        rotationOutputRange
      );
    });
  }

  addSquaresToGroup() {
    this.squares.forEach((square) => {
      this.group.add(square.mesh);
    });
  }

  setAnimate() {
    this.animate = function (_: number, entryProgress: number) {
      if (this.localProgress !== entryProgress) {
        this.localProgress = entryProgress;
        const colorAlpha = this.colorAlphaMapper(entryProgress);
        this.squares.forEach((square: Scene_Element_Transition_Square) => {
          square.animate(entryProgress, colorAlpha);
        });
      }
    };
  }
}
