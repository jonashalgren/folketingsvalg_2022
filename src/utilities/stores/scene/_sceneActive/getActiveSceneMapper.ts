import type { TextSectionOffset } from "@models";
import { scene } from "@assets";

type Props = {
  offsets: TextSectionOffset[];
};

export function getActiveSceneMapper({ offsets }: Props) {
  return getActiveSceneInterpolate(getActiveSceneInputRange(offsets));
}

function getActiveSceneInterpolate(inputRange: number[]) {
  return function (scrollY: number) {
    const activeItem = inputRange.length > 0 ? inputRange.find((item) => scrollY < item) : 0;
    const activeSceneIndex = inputRange.indexOf(activeItem);
    const maxIndex = scene.length - 1;
    return inputRange.length > 0 ? (activeSceneIndex === -1 ? maxIndex : activeSceneIndex) : 0;
  };
}

function getActiveSceneInputRange(offsets: TextSectionOffset[]) {
  return offsets.map(({ sectionDeactivate }) => sectionDeactivate);
}
