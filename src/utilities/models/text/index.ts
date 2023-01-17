export type TextSectionOffset = {
  progressMainStart: number;
  progressMainEnd: number;
  progressEntryStart: number;
  progressExitEnd: number;
  top: number;
  bottom: number;
};

export type TextPosition = {
  top: number;
  bottom: number;
  nextTop: number;
  lastEnd: number;
};
