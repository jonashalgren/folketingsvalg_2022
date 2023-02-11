import { Canvas_Content_Map_Area } from "@classes";
import { Canvas_Content_Element } from "@classes_abstract";
import { election_result_areas } from "@assets";
import type { C_C_E_Mesh_Map, C_Content_Settings, C_C_S_Element_Map, C_C_S_Element_Map_Area_Id } from "@models";
import { getProcessedConfigs } from "./getProcessedConfigs";

export class Canvas_Content_Map extends Canvas_Content_Element<C_C_S_Element_Map, C_C_E_Mesh_Map[]> {
  private areas: Canvas_Content_Map_Area[];
  private focusedAreas: C_C_S_Element_Map_Area_Id[] = [];

  constructor(elementSettings: C_C_S_Element_Map, meshesTemplate: C_C_E_Mesh_Map[], contentSettings: C_Content_Settings) {
    super(elementSettings, meshesTemplate, contentSettings, 0);

    this.setElementSettings();
    this.setAreas();
  }

  private setElementSettings() {
    this.elementSettings = getProcessedConfigs({
      electionResult: election_result_areas,
      elementSettings: this.elementSettings,
    }).elementSettings;
  }

  private setAreas() {
    this.areas = election_result_areas.map(
      (area) =>
        new Canvas_Content_Map_Area(
          area.id,
          this.elementSettings,
          this.meshes.filter((entry) => entry.userData.areaId === area.id),
          this.contentSettings
        )
    );
  }

  private updateAreas() {
    this.areas.forEach((area) => {
      area.resize(this.elementSettings, this.contentSettings);
    });
  }

  private updateFocusedAreas(progress: number) {
    if (this.elementSettings.focus) {
      this.focusedAreas = this.elementSettings.focus
        .filter((item) => progress >= item.inputRange[0] && progress <= item.inputRange[1])
        .flatMap((item) => item.areas);
    }
  }

  private animateAreas(progress: number) {
    this.areas.forEach((area: Canvas_Content_Map_Area) => {
      const isFaded = this.focusedAreas.length > 0 && !this.focusedAreas.includes(area.areaId);
      area.animate(progress, isFaded);
    });
  }

  resize(elementSettings: C_C_S_Element_Map, contentSettings: C_Content_Settings) {
    this.elementSettings = elementSettings;
    this.contentSettings = contentSettings;

    this.setElementSettings();
    this.updateAreas();
  }

  animate(progress: number) {
    if (this.localProgress !== progress) {
      this.localProgress = progress;

      this.updateFocusedAreas(progress);
      this.animateAreas(progress);
    }
  }
}
