import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import type { Props } from "./index";

export function setShapes(item: Props) {
  return {
    ...item,
    shapes: item.paths.map((path) => {
      return {
        letter: path.letter,
        color: path.items[0].color,
        shapeBg: SVGLoader.createShapes(path.items[0])[0],
        shapeLetter: SVGLoader.createShapes(path.items[1])[0],
      };
    }),
  };
}
