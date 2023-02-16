import { readable } from "svelte/store";
import { canvasScenesSettings } from "@assets";
import { getContentSectiontsTexts } from "./getContentSectiontsTexts";

export const _contentSectionsTexts = readable<string[][]>([], function (set) {
  const api = "https://storage.googleapis.com/sheet-parser/f476c0bb0c6e254cefb58ddac5daa6cd-drnfv2022-tekst.json";
  (async function setContentSectionsTexts() {
    try {
      const response = await fetch(api);
      const { data } = await response.json();
      const { contentSectionsTexts } = getContentSectiontsTexts({ responseData: data, canvasScenesSettings });
      set(contentSectionsTexts);
    } catch (error) {
      console.log(error);
    }
  })();
});
