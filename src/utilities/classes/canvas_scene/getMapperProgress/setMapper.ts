import type { Props } from "./index";

export function setMapper(item: Props): Props {
  let main = item.mapperProgressMain(scrollY);
  let entry = item.mapperProgressEntry(scrollY);
  let exit = item.mapperProgressExit(scrollY);
  let auto = 0;

  return {
    ...item,
    mapper: function () {
      const state = item.mapperProgressState(scrollY);
      if (state === "active" || state === "next") {
        main = item.mapperProgressMain(scrollY);
        entry = item.mapperProgressEntry(scrollY);
        exit = item.mapperProgressExit(scrollY);

        if (item?.sceneSettings?.mode === "auto") {
          auto = item.mapperProgressAuto();
        }
      }

      return { main, entry, exit, auto, state };
    },
  };
}
