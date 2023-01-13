import { readable } from "svelte/store";
import { threeProperties } from "@assets";
import { preloadFont } from "troika-three-text";

export const _preloadFont = readable(false, function start(set) {
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
      set(true);
    })
    .catch(() => {
      set(true);
    });
});
