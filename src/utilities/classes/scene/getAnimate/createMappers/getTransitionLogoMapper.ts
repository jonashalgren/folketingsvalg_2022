import { interpolate } from "popmotion";
import type { Scene } from "three";
import { getLogo } from "@helpers";
import { Color } from "three";
import { _isAnimating } from "@stores";
import type { S } from "@models";

type Props = {
  scene: Scene;
  data: S;
};

export function getTransitionLogoMapper({ scene, data }: Props) {
  const colorMapper = interpolate([0, 0.3, 0.9, 1], [1, 0, 0, 1]);
  const moveMapper = interpolate([0.5, 1], [0, 1]);

  const squares = getLogo({ size: 40 });
  if (data?.hasLogoIntro) {
    scene.add(...squares.map((item) => item.mesh));
  }
  let localProgress = undefined;

  const whiteColor = new Color("#ffffff");
  const blackColor = new Color("#000000");

  return {
    transitionLogoMapper: function ({ progress }: { progress: number }) {
      if (localProgress !== progress && data?.hasLogoIntro) {
        localProgress = progress;
        const colorVal = colorMapper(progress);
        const moveVal = moveMapper(progress);

        squares.forEach((item, index) => {
          const color = squares[index].color;
          item.mesh.material.color.lerpColors(color, whiteColor, colorVal);
          item.mesh.material.emissive.lerpColors(blackColor, whiteColor, colorVal);
          item.mesh.position.set(...item.positionMapper(moveVal));
          item.mesh.rotation.set(...item.rotationMapper(moveVal));
        });
      }
    },
  };
}
