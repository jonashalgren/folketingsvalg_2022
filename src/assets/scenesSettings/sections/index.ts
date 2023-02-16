import type { C_Scene_Settings } from "@models";
import { first } from "./first";
import { second } from "./second";
import { third } from "./third";
import { fourth } from "./fourth";
import { fifth } from "./fifth";
import { sixth } from "./sixth";
import { third2 } from "./third2";
import { third3 } from "./third3";

export const sections: C_Scene_Settings[] = [...sixth, ...first, ...second, ...third, ...third2, ...third3, ...fourth, ...fifth];
