import { Scene_Element } from "@classes";
import type { S_E_Block_Image, S_E_Image } from "@models";

export class Scene_Element_Image extends Scene_Element {
  constructor(public imageData: S_E_Image, public blockImages: S_E_Block_Image[]) {
    super();
    this.setBlocksGroup(this.blockImage.group);
  }

  get blockImage() {
    return this.blockImages.find((item) => item.partyLetter === this.imageData.partyLetter);
  }
}
