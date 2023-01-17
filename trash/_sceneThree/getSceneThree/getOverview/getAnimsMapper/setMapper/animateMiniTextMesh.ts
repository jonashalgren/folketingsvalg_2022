import type { Mesh_Text } from "@models";
import { animate } from "popmotion";

type Props = {
  value: number;
  text: Mesh_Text;
  currentSize: number;
  progression: number;
};

export function animateMiniTextMesh({ value, text, currentSize, progression }: Props) {
  if (progression === 0 && text.userData.isVisible) {
    text.userData.isVisible = false;
    animate({
      from: 1,
      to: 0,
      type: "spring",
      onUpdate: (latest) => {
        text.material.opacity = latest;
      },
    });
  } else if (progression !== 0 && !text.userData.isVisible) {
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
  let newValue = "";

  if (progression < 0) {
    newValue = `-${Math.abs(progression).toFixed(1)}`.replace(".", ",");
  } else if (progression > 0) {
    newValue = `+${progression.toFixed(1)}`.replace(".", ",");
  }

  if (progression === value) {
    newValue = `${newValue} (nyt parti)`;
  }

  text.position.x = currentSize - (value >= 10 ? 2.8 : 3.8);
  text.text = newValue;
}
