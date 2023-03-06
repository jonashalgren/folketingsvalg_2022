import { Canvas_Scene_Element } from "@classes_abstract";
import type { C_S_S_Element_Chart } from "@models";

type Props = {
  elementSettings: C_S_S_Element_Chart;
};

export class Canvas_Scene_Element_Chart extends Canvas_Scene_Element<C_S_S_Element_Chart, undefined> {
  constructor(props: Props) {
    super(props);
  }

  resize(): void {}

  animate(_progress: number, _entryProgress: number) {}
}
