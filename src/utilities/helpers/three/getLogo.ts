import { getMeshGeometry } from "@helpers";
import { Color, Mesh, MeshLambertMaterial, CustomBlending, MinEquation, SrcAlphaFactor, Shape } from "three";
import { interpolate } from "popmotion";

type Props = {
  size: number;
};

type MapperProps = (val: number) => [number, number, number];

export function getLogo({ size }: Props) {
  const shape = new Shape();

  const x = size;
  const y = size;
  shape.moveTo(-x, -y);
  shape.lineTo(-x, y);
  shape.lineTo(x, y);
  shape.lineTo(x, -y);

  const geometry = getMeshGeometry({ shape });

  const finalPositions = [
    [-250, 250, 20],
    [250, 250, 30],
    [-40, -250, 40],
  ];

  return [
    { color: new Color("#e6ce51"), x: 0.3, y: 0.3, rotationOutputRange: [0.2, 0.2, -0.5] },
    { color: new Color("#ba51b7"), x: 0, y: 0, rotationOutputRange: [0.4, -0.2, 0.5] },
    { color: new Color("#26d6d2"), x: 0.5, y: -0.2, rotationOutputRange: [-0.2, 0.2, -0.5] },
  ].map((item, i) => {
    const material = new MeshLambertMaterial({ color: item.color });

    material.blending = CustomBlending;
    material.blendEquation = MinEquation;
    material.blendSrc = SrcAlphaFactor;

    const mesh = new Mesh(geometry, material);
    const positionOutputRange = [x * item.x, y * item.y, 5 + i * 7] as [number, number, number];

    mesh.scale.z = 0.1;
    mesh.position.z = 0;
    mesh.position.set(...positionOutputRange);
    const rotation = item.rotationOutputRange as [number, number, number];

    return {
      ...item,
      mesh,
      positionOutputRange,
      positionMapper: interpolate([0, 1], [positionOutputRange, finalPositions[i]]) as MapperProps,
      rotationMapper: interpolate([0, 1], [[0, 0, 0], rotation]) as MapperProps,
    };
  });
}
