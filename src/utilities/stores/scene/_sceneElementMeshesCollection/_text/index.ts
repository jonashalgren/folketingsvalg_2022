import { readable } from "svelte/store";
import { threeProperties } from "@assets";
import { preloadFont } from "troika-three-text";
import { getTextMeshes } from "./getTextMeshes";
import type { S_E_Text_Mesh } from "@models";

export const _text = readable<S_E_Text_Mesh[]>(undefined, function start(set) {
  const { font_ane, font_publik, font_publik_regular } = threeProperties;
  const fonts = [font_ane, font_publik, font_publik_regular];
  Promise.all(
    fonts.map((item) => {
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
