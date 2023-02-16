import { readable } from "svelte/store";
import { tick } from "svelte";
import { _contentSectionsTexts, _canvasScenesSettings } from "@stores";

export const _contentIsRendered = readable<boolean>(false, function start(set) {
  let contentSectiongsTexts = [];
  let scenesSettings = [];

  async function setContentIsRendered() {
    await tick();
    set(contentSectiongsTexts.length > 0 && scenesSettings.length > 0);
  }

  _contentSectionsTexts.subscribe(async (val) => {
    contentSectiongsTexts = val;
    setContentIsRendered();
  });

  _canvasScenesSettings.subscribe(async (val) => {
    scenesSettings = val;
    setContentIsRendered();
  });
});
