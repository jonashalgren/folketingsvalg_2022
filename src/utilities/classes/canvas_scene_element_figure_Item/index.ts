import type { C_S_E_Mesh_Figure } from "@models";

export class Canvas_Scene_Element_Figure_Item {
  elementMeshes: C_S_E_Mesh_Figure[];
  width: number;
  height: number;
  itemsPrRow: number;
  itemWidth: number;
  itemHeight: number;
  itemScale: number;
  index: number;

  meshes: C_S_E_Mesh_Figure[];
  row: number;
  xPos: number;
  yPos: number;
  opacity: number;
  opacityStep: number;

  constructor(
    elementMeshes: C_S_E_Mesh_Figure[],
    width: number,
    height: number,
    itemsPrRow: number,
    itemWidth: number,
    itemHeight: number,
    itemScale: number,
    index: number
  ) {
    this.elementMeshes = elementMeshes;
    this.width = width;
    this.height = height;
    this.itemsPrRow = itemsPrRow;
    this.itemWidth = itemWidth;
    this.itemHeight = itemHeight;
    this.itemScale = itemScale;
    this.index = index;
    this.opacity = 1;
    this.opacityStep = 0.016;
    this.setRow();
    this.setMeshes();
    this.setPosition();
    this.setProperties();
  }

  setRow() {
    this.row = Math.floor(this.index / this.itemsPrRow);
  }

  setPosition() {
    this.xPos = -(this.width / 2) + this.index * this.itemWidth - this.width * this.row + this.itemWidth * 0.05;
    this.yPos = -(this.row * this.itemHeight) + this.itemHeight * 0.05;
  }

  setMeshes() {
    this.meshes = this.elementMeshes.map((mesh: C_S_E_Mesh_Figure) => {
      const clone = mesh.clone();
      clone.userData = mesh.userData;
      clone.geometry = clone.geometry.clone() as any;
      clone.material = clone.material.clone();
      clone.material.transparent = true;
      return clone;
    });
  }

  setProperties() {
    this.meshes.forEach((item) => {
      item.position.set(this.xPos, this.yPos, 0.1);
      item.scale.set(this.itemScale * 0.9, this.itemScale * 0.9, 0.1);
    });
  }

  resize() {}

  animate(progress: number, isFaded: boolean) {
    let goal = 0;

    if (isFaded && progress > 0) {
      goal = 0.2;
    } else if (!isFaded && progress > 0) {
      goal = 1;
    }

    if (this.opacity > goal) {
      this.opacity -= this.opacityStep;
    } else if (this.opacity < goal) {
      this.opacity += this.opacityStep;
    }

    if (Math.abs(this.opacity - goal) < this.opacityStep && this.opacity !== goal) {
      this.opacity = goal;
    }

    this.meshes.forEach((mesh) => {
      mesh.material.opacity = this.opacity;
    });
  }
}
