import { readable } from "svelte/store";
import { scene } from "@assets";
import { getTextData } from "./getTextData";

export const _textData = readable<string[][]>([], function start(set) {
  fetch("https://storage.googleapis.com/sheet-parser/f476c0bb0c6e254cefb58ddac5daa6cd-drnfv2022-tekst.json")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      set(getTextData({ data: json.data, scenes: scene, textData: [] }).textData);
    });

  // set([
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  //   ["lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes", "lorem ip ip lorem, lol jes"],
  // ]);
});
