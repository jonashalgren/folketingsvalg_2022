import { readable } from "svelte/store";
import { threeProperties } from "@assets";
import { preloadFont } from "troika-three-text";
import { getText } from "./getText";
import type { S_E_Block_Text } from "@models";

export const _text = readable<S_E_Block_Text>(undefined, function start(set) {
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
      set(getText());
    })
    .catch(() => {
      set(getText());
    });
});
