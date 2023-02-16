import { readable } from "svelte/store";
import { tick } from "svelte";
import { _contentSectionsTexts, _canvasSceneElementsMeshes } from "@stores";

export const _contentIsRendered = readable<boolean>(false, function start(set) {
  let contentSectiongsTexts = [];
  let elementsMeshes = undefined;

  async function setContentIsRendered() {
    await tick();
    set(contentSectiongsTexts.length > 0 && elementsMeshes);
  }

  _contentSectionsTexts.subscribe(async (val) => {
    contentSectiongsTexts = val;
    setContentIsRendered();
  });

  _canvasSceneElementsMeshes.subscribe(async (val) => {
    elementsMeshes = val;
    setContentIsRendered();
  });
});
