import { readable } from "svelte/store";
import { _rAF, _contentDOMElement, _viewport } from "@stores";
import { setContentSectionsOffsets } from "./setContentSectionsOffsets";
import type { Content_Section_Offsets } from "@models";

export const _contentSectionsOffsets = readable<Content_Section_Offsets[]>([], function start(set) {
  let contentDOMElement: HTMLDivElement = undefined;
  let vh = 0;
  let currentOffsets: Content_Section_Offsets[] = [];

  _contentDOMElement.subscribe((val) => (contentDOMElement = val));
  _viewport.subscribe((val) => (vh = val.h));
  _contentSectionsOffsets.subscribe((val) => (currentOffsets = val));

  const remove = _rAF.add(() => setContentSectionsOffsets({ currentOffsets, contentDOMElement, set, vh }), 2000);

  return () => remove();
});
