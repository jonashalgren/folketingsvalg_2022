import { readable } from "svelte/store";
import { tick } from "svelte";
import { _contentSectionsTexts, _canvasContentElementsDetails } from "@stores";

export const _contentIsRendered = readable<boolean>(false, function start(set) {
  let contentSectiongsTexts = [];
  let canvasContentElementsDetails = undefined;

  async function setContentIsRendered() {
    await tick();
    set(contentSectiongsTexts.length > 0 && canvasContentElementsDetails);
  }

  _contentSectionsTexts.subscribe(async (val) => {
    contentSectiongsTexts = val;
    setContentIsRendered();
  });

  _canvasContentElementsDetails.subscribe(async (val) => {
    canvasContentElementsDetails = val;
    setContentIsRendered();
  });
});
