import { readable } from "svelte/store";
import { fonts } from "@assets";
import { preloadFont } from "troika-three-text";
import { getTextMeshes } from "./getTextMeshes";
import type { S_E_M_Text } from "@models";

export const _text = readable<S_E_M_Text[]>(undefined, function start(set) {
  Promise.all(
    [fonts.ane, fonts.publik, fonts.publik_regular].map((item) => {
      return new Promise((resolve) => {
        preloadFont(
          {
            font: item,
            characters: "abcdefghijklmnopqrstuvwxyz1234567890",
          },
          () => {
            resolve("done");
          }
        );
      });
    })
  )
    .then(() => {
      set(getTextMeshes());
    })
    .catch(() => {
      set(getTextMeshes());
    });
});
