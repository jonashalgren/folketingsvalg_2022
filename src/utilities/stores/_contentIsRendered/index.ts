import { readable } from "svelte/store";
import { tick } from "svelte";
import { _contentSectionsTexts, _elementsDetails } from "@stores";

export const _contentIsRendered = readable<boolean>(false, function start(set) {
  let contentSectiongsTexts = [];
  let elementDetails = [];

  async function setContentIsRendered() {
    await tick();
    set(contentSectiongsTexts.length > 0 && elementDetails.length > 0);
  }

  _contentSectionsTexts.subscribe(async (val) => {
    contentSectiongsTexts = val;
    setContentIsRendered();
  });

  _elementsDetails.subscribe(async (val) => {
    elementDetails = val;
    setContentIsRendered();
  });
});
