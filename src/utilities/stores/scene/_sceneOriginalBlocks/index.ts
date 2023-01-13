import { derived } from "svelte/store";
import type { Readable } from "svelte/store";

import type { S_Originals } from "@models";
import { _barChart } from "./_barChart";
import { _figure } from "./_figure";
import { _image } from "./_image";
import { _lineChart } from "./_lineChart";
import { _logo } from "./_logo";
import { _map } from "./_map";
import { _number } from "./_number";

export const _sceneOriginalBlocks: Readable<S_Originals | undefined> = derived(
  [_barChart, _figure, _image, _lineChart, _logo, _map, _number],
  ([$_barChart, $_figure, $_image, $_lineChart, $_logo, $_map, $_number]) => {
    if ($_barChart && $_figure && $_image.length > 0 && $_lineChart && $_logo.length > 0 && $_map && $_number) {
      return {
        image: $_image,
        logo: $_logo,
        figure: $_figure,
        number: $_number,
        map: $_map,
        lineChart: $_lineChart,
        barChart: $_barChart,
      };
    }
    return undefined;
  }
);
