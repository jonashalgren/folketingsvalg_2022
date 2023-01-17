import { Group } from "three";

export class Scene_Element {
  animate: (progress: number) => void;
  blocksGroup: Group;
  constructor() {
    this.animate = function () {};
    this.blocksGroup = new Group();
  }

  setBlocksGroup(group: Group) {
    return this.blocksGroup.copy(group);
  }
}
