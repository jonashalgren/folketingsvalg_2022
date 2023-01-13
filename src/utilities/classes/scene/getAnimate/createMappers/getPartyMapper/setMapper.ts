import type { S_Anims_Mappers } from "@models";
import { get } from "svelte/store";
import { _sceneActive, _animations } from "@stores";
import type { Props } from "./index";
import { animate } from "popmotion";

export function setMapper(item: Props): Props {
  let localProgress = undefined;
  let animator: any;
  let isAnimating = false;

  return {
    ...item,
    mapper: function ({ progress }: S_Anims_Mappers) {
      if (localProgress !== progress) {
        if (!item.data.isPartyFloating) {
          localProgress = progress;
          item.properties.forEach((entry) => {
            const position = entry.positionMapper(progress);
            const scale = entry.scaleMapper(progress);
            entry.mesh.position.set(position[0] - entry.offset, position[1] + entry.offset, position[2]);
            entry.mesh.scale.set(scale[0], scale[1], scale[2]);
            entry.mesh.children[0].position.z = entry.letterPositionYMapper(scale[2]);
          });
        }

        if (item.data.isPartyFloating) {
          animator?.stop();
          animator = animate({
            from: localProgress,
            to: progress,
            type: "spring",
            stiffness: 100,
            mass: 1,
            damping: 10,
            onUpdate: (p) => {
              localProgress = p;
            },
          });
        }
        if (!isAnimating && item.data.isPartyFloating) {
          isAnimating = true;
          item.properties.forEach((entry, index) => {
            const animation = animate({
              from: 0,
              to: 1,
              elapsed: -(index * 200),
              duration: 4000 + Math.random() * 2000,
              repeat: Infinity,
              onUpdate: (hovering) => {
                const position = entry.positionMapper(localProgress);
                const scale = entry.scaleMapper(hovering);
                const y = entry.floatingYMapper(hovering);

                entry.mesh.position.set(
                  position[0] - entry.offset,
                  position[1] + entry.offset + y,
                  position[2] + index * 0.1
                );

                entry.mesh.scale.set(scale[0], scale[1], scale[2]);

                if (get(_sceneActive) !== item.data.index) {
                  animation.stop();
                  isAnimating = false;
                }
              },
            });
            _animations.update((value) => [...value, animation]);
          });
        }
      }
    },
  };
}
