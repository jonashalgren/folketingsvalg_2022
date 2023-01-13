import type { Props } from "../index";

export function setTransition(item: Props) {
  return {
    ...item,
    sceneData: item.sceneData.map((entry, index) => {
      return {
        index: index,
        ...entry,
        transition: {
          entryPosition: [0, 0, 500] as [number, number, number],
          entryTarget: [0, 0, 0] as [number, number, number],
          exitPosition: [0, 0, 0] as [number, number, number],
          exitTarget: [0, 0, -100] as [number, number, number],
          ...entry.transition,
        },
      };
    }),
  };
}
