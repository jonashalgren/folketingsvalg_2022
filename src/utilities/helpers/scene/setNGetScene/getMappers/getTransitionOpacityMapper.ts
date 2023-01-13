import type { S } from "@models";
import { interpolate } from "popmotion";
import type { Group } from "three";

type Props = {
  group: Group;
  data: S;
};

export function getTransitionOpacityMapper({ group, data }: Props) {
  const inputValue = data.hasLogoIntro ? [0.6, 0.9] : [0.2, 0.5];
  const progressMapper = interpolate(inputValue, [0, 1]);

  let localProgress = undefined;

  group.children.forEach((child: any) => {
    if (child.isGroup) {
      child.children.forEach((item: any) => {
        item.material.transparent = true;
        if (Array.isArray(item.material)) {
          item.material.forEach((item: any) => {
            item.transparent = true;
          });
        }
      });
    } else {
      child.material.transparent = true;
    }
  });

  return {
    transitionOpacityMapper: function ({ progress }: { progress: number }) {
      if (localProgress !== progress) {
        localProgress = progress;
        const val = progressMapper(progress);
        group.children.forEach((child: any) => {
          if (child.isGroup) {
            child.children.forEach((item: any) => {
              if (!item.userData.stayHidden) {
                item.material.opacity = val;
                if (Array.isArray(item.material)) {
                  item.material.forEach((item: any) => {
                    item.opacity = val;
                  });
                }
              }
            });
          } else {
            if (!child.userData.stayHidden) {
              child.material.opacity = val;
            }
          }
        });
      }
    },
  };
}
