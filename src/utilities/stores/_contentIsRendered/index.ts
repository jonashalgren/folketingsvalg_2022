import { readable } from "svelte/store";
import { tick } from "svelte";
import { _contentSectionsTexts, _rAF } from "@stores";

export const _contentIsRendered = readable<boolean>(false, function start(set) {
  _contentSectionsTexts.subscribe(async (val) => {
    await tick();
    set(val.length > 0);
  });
});
