import { Canvas_Scene_Element_Map_Area } from "@classes";
import { Canvas_Scene_Element } from "@classes_abstract";
import { election_result_areas } from "@assets";
import type { C_S_E_Mesh_Map, C_Scene_Settings, C_S_S_Element_Map, C_S_S_Element_Map_Area_Id } from "@models";
import { getProcessedConfigs } from "./getProcessedConfigs";

export class Canvas_Scene_Element_Map extends Canvas_Scene_Element<C_S_S_Element_Map, C_S_E_Mesh_Map[]> {
  private areas: Canvas_Scene_Element_Map_Area[];
  private focusedAreas: C_S_S_Element_Map_Area_Id[] = [];

  constructor(elementSettings: C_S_S_Element_Map, elementMeshes: C_S_E_Mesh_Map[], sceneSettings: C_Scene_Settings) {
    super(elementSettings, elementMeshes, sceneSettings, 0);

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
        new Canvas_Scene_Element_Map_Area(
          area.id,
          this.elementSettings,
          this.meshes.filter((entry) => entry.userData.areaId === area.id),
          this.sceneSettings
        )
    );
  }

  private resizeAreas() {
    this.areas.forEach((area) => {
      area.resize(this.elementSettings, this.sceneSettings);
    });
  }

  private animateFocusedAreas(progress: number) {
    if (this.elementSettings.focus) {
      this.focusedAreas = this.elementSettings.focus
        .filter((item) => progress >= item.inputRange[0] && progress <= item.inputRange[1])
        .flatMap((item) => item.areas);
    }
  }

  private animateAreas(progress: number) {
    this.areas.forEach((area: Canvas_Scene_Element_Map_Area) => {
      const isFaded = this.focusedAreas.length > 0 && !this.focusedAreas.includes(area.areaId);
      area.animate(progress, isFaded);
    });
  }

  resize(elementSettings: C_S_S_Element_Map, sceneSettings: C_Scene_Settings) {
    this.elementSettings = elementSettings;
    this.sceneSettings = sceneSettings;

    this.setElementSettings();
    this.resizeAreas();
  }

  animate(progress: number) {
    this.animateFocusedAreas(progress);
    this.animateAreas(progress);
  }
}
