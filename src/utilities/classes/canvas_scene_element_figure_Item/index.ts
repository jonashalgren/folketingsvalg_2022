import type { C_S_E_Mesh_Figure } from "@models";

type Props = {
  elementMeshes: C_S_E_Mesh_Figure[];
  width: number;
  height: number;
  itemsPrRow: number;
  itemWidth: number;
  itemHeight: number;
  itemScale: number;
  index: number;
};

export class Canvas_Scene_Element_Figure_Item {
  meshes: C_S_E_Mesh_Figure[];
  row: number;
  xPos: number;
  yPos: number;
  opacity: number;
  opacityStep: number;

  constructor(private props: Props) {
    this.opacity = 1;
    this.opacityStep = 0.016;
    this.setRow();
    this.setMeshes();
    this.setPosition();
    this.setProperties();
  }

  setRow() {
    this.row = Math.floor(this.props.index / this.props.itemsPrRow);
  }

  setPosition() {
    this.xPos = -(this.props.width / 2) + this.props.index * this.props.itemWidth - this.props.width * this.row + this.props.itemWidth * 0.05;
    this.yPos = -(this.row * this.props.itemHeight) + this.props.itemHeight * 0.05;
  }

  setMeshes() {
    this.meshes = this.props.elementMeshes.map((mesh: C_S_E_Mesh_Figure) => {
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
      item.scale.set(this.props.itemScale * 0.9, this.props.itemScale * 0.9, 0.1);
    });
  }

  animating(progress: number, isFaded: boolean) {
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
