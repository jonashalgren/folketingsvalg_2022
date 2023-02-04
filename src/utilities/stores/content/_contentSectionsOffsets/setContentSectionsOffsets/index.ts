import type { Content_Section_Offsets } from "@models";
import { pipe } from "@helpers";
import type { Subscriber } from "svelte/store";
import { setNewOffsets } from "./setNewOffsets";
import { setter } from "./setter";

export type Props = {
  newOffsets?: Content_Section_Offsets[];
  currentOffsets: Content_Section_Offsets[];
  contentDOMElement: HTMLDivElement;
  vh: number;
  set: Subscriber<Content_Section_Offsets[]>;
};

export const setContentSectionsOffsets = pipe(setNewOffsets, setter);
