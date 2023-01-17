import type { Mesh_Text } from "@models";
import { getChartValue } from "@helpers";
import { animate } from "popmotion";

type Props = {
  value: number;
  text: Mesh_Text;
  currentSize: number;
};

export function animateTextMesh({ value, text, currentSize }: Props) {
  if (value === 0 && text.userData.isVisible) {
    text.userData.isVisible = false;
    animate({
      from: 1,
      to: 0,
      type: "spring",
      onUpdate: (latest) => {
        text.material.opacity = latest;
      },
    });
  } else if (value > 0 && !text.userData.isVisible) {
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

  text.position.x = currentSize - 8;
  text.text = getChartValue({ value, unit: "%" });
}
