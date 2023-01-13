import type { PerspectiveCamera } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export type S_Mappers = {
  cameraMainTargetMapper: ({ progress, controls }: { progress: number; controls: OrbitControls }) => void;
  cameraEntryTargetMapper: ({ progress, controls }: { progress: number; controls: OrbitControls }) => void;
  cameraExitTargetMapper: ({ progress, controls }: { progress: number; controls: OrbitControls }) => void;
  cameraMainPositionMapper: ({ progress, camera }: { progress: number; camera: PerspectiveCamera }) => void;
  cameraEntryPositionMapper: ({ progress, camera }: { progress: number; camera: PerspectiveCamera }) => void;
  cameraExitPositionMapper: ({ progress, camera }: { progress: number; camera: PerspectiveCamera }) => void;
  transitionOpacityMapper: ({ progress }: { progress: number }) => void;
  transitionLogoMapper: ({ progress }: { progress: number }) => void;
  partyMapper: ({ progress }: { progress: number }) => void;
  textMapper: ({ progress }: { progress: number }) => void;
  numberMapper: ({ progress }: { progress: number }) => void;
  partMapper: ({ progress }: { progress: number }) => void;
};

export type S_Anims_Mappers = {
  progress: number;
  isActive?: Boolean;
};
