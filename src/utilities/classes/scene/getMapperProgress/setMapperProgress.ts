import type { Props } from "./index";

export function setMapperProgress(item: Props): Props {
  let main = item.mapperProgressMain(window.scrollY);
  let entry = item.mapperProgressEntry(window.scrollY);
  let exit = item.mapperProgressExit(window.scrollY);
  let auto = 0;

  return {
    ...item,
    mapper: function ({ scrollY }: { scrollY: number }) {
      const state = item.mapperProgressState(scrollY);

      if (state === "active" || state === "next") {
        main = item.mapperProgressMain(scrollY);
        entry = item.mapperProgressEntry(scrollY);
        exit = item.mapperProgressExit(scrollY);

        if (item?.settings?.mode === "auto") {
          auto = item.mapperProgressAuto();
        }
      }

      return { main, entry, exit, auto, state };
    },
  };
}
