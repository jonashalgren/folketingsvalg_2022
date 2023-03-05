import { Canvas_Scene_Element } from "@classes_abstract";
import type { C_S_E_Mesh_Figure, C_S_S_Element_Figure } from "@models";
import { Canvas_Scene_Element_Figure_Item } from "@classes";
import { Group, Box3, Color } from "three";

type Props = {
  elementSettings: C_S_S_Element_Figure;
  elementMeshes: C_S_E_Mesh_Figure[];
};

export class Canvas_Scene_Element_Figure extends Canvas_Scene_Element<C_S_S_Element_Figure, C_S_E_Mesh_Figure[]> {
  itemsPrRow: number;
  itemDefaultWidth: number;
  itemDefaultHeight: number;
  itemScale: number;
  itemWidth: number;
  itemHeight: number;

  width: number;
  height: number;
  items: Canvas_Scene_Element_Figure_Item[];

  constructor(props: Props) {
    super(props);
    this.elementMeshes = props.elementMeshes;
    this.setElementMeshesColor();
    this.setItemsPrRow();
    this.setDefaultSize();
    this.setItemScale();
    this.setItemSize();
    this.setSize();
    this.setItems();
    this.setItemMeshes();
  }

  private setElementMeshesColor() {
    const color = new Color(this.elementSettings.color);
    this.elementMeshes.forEach((mesh) => {
      mesh.material.color = color;
    });
  }

  private setItemsPrRow() {
    this.itemsPrRow = Math.floor(this.elementSettings.amount / this.elementSettings.rows);
  }

  private setDefaultSize() {
    const group = new Group();
    group.add(...this.elementMeshes);
    const box = new Box3();
    box.setFromObject(group);
    this.itemDefaultWidth = box.max.x - box.min.x;
    this.itemDefaultHeight = box.max.y - box.min.y;
  }

  private setItemScale() {
    this.itemScale = (this.elementSettings.width / this.itemsPrRow / this.itemDefaultWidth) * 0.95;
  }

  private setItemSize() {
    this.itemWidth = this.itemDefaultWidth * this.itemScale;
    this.itemHeight = this.itemDefaultHeight * this.itemScale;
  }

  private setSize() {
    this.width = this.itemWidth * this.itemsPrRow;
    this.height = this.itemHeight * this.elementSettings.rows;
  }

  private setItems() {
    this.items = Array.from(Array(this.elementSettings.amount).keys()).map(
      (_, index) =>
        new Canvas_Scene_Element_Figure_Item({
          elementMeshes: this.elementMeshes,
          width: this.width,
          height: this.height,
          itemsPrRow: this.itemsPrRow,
          itemWidth: this.itemWidth,
          itemHeight: this.itemHeight,
          itemScale: this.itemScale,
          index,
        })
    );
  }

  private setItemMeshes() {
    this.meshes = this.items.flatMap((item) => item.meshes);
  }

  resizing() {}

  animating(progress: number) {
    const fadedItems = this.elementSettings.items.find(({ inputRange }) => inputRange[0] <= progress && inputRange[1] >= progress);
    this.items.forEach((item, index) => {
      if (fadedItems) {
        item.animating(progress, this.items.length - fadedItems.disabled - 1 < index);
      } else {
        item.animating(progress, false);
      }
    });
  }
}
