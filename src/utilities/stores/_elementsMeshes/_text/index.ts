import { readable } from "svelte/store";
import { fonts } from "@assets";
import { preloadFont } from "troika-three-text";

export const _text = readable<boolean>(false, function start(set) {
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
      set(true);
    })
    .catch(() => {
      set(true);
    });
});
