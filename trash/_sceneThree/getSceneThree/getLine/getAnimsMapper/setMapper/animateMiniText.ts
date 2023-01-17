import type { Mesh_Text } from "@models";
import { animate } from "popmotion";

type Props = {
  endPos: number;
  progress: number;
  text: Mesh_Text;
};

export function animateMiniTextMesh({ text, endPos, progress }: Props) {
  if (progress < endPos && text.userData.isVisible) {
    text.userData.isVisible = false;
    animate({
      from: 1,
      to: 0,
      type: "spring",
      onUpdate: (latest) => {
        text.material.opacity = latest;
      },
    });
  } else if (progress >= endPos && !text.userData.isVisible) {
    text.material.opacity = 0;
    text.userData.isVisible = true;
    animate({
      from: 0,
      to: 1,
      type: "spring",
      onUpdate: (latest) => {
        text.material.opacity = latest;
      },
    });
  }
}
