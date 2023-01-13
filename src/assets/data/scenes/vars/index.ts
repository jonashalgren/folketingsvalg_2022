import { partyCollection } from "@assets";
import type { P_Letter } from "@models";

export const mapLogoPosition: [number, number, number] = [25, 20, 0];
export const mapLogoNotScaled: [number, number, number] = [1, 1, 0.1];
export const mapNumberSize = 6;
export const mapLogoSize = 10;

export function getMapLogoIsScaled(val: P_Letter, year: number) {
  if (year === 2019) {
    return [1, 1, partyCollection[val].procent_af_stemmer_2019 * 50] as [number, number, number];
  } else {
    return [1, 1, partyCollection[val].procent_af_stemmer_2022 * 50] as [number, number, number];
  }
}
