import type { Mesh_Extrude, S_Map_Area_Id } from "@models";
import { animate } from "popmotion";

type Props = {
  areaId: S_Map_Area_Id;
  meshes: Mesh_Extrude[];
  activeAreas: S_Map_Area_Id[];
};

export function animateAreaOpacity({ activeAreas, meshes, areaId }: Props) {
  const isFaded = activeAreas.length > 0 && !activeAreas.includes(areaId);
  meshes.forEach((mesh) => {
    if (!isFaded && mesh.userData.isFaded && !mesh.userData.isFading) {
      mesh.userData.isFaded = false;
      mesh.userData.isFading = true;
      animate({
        from: 0.3,
        to: 1,
        type: "spring",
        stiffness: 5,
        damping: 2,
        onUpdate: (latest) => {
          mesh.material.opacity = latest;
        },
        onComplete: () => {
          mesh.userData.isFading = false;
        },
      });
    } else if (isFaded && !mesh.userData.isFaded && !mesh.userData.isFading) {
      mesh.userData.isFaded = true;
      mesh.userData.isFading = true;
      animate({
        from: 1,
        to: 0.3,
        type: "spring",
        stiffness: 5,
        damping: 2,
        onUpdate: (latest) => {
          mesh.material.opacity = latest;
        },
        onComplete: () => {
          mesh.userData.isFading = false;
        },
      });
    }
  });
}
