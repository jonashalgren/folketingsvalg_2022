export type S_Progress_State = "active" | "inactive" | "next";

export type S_Progress_Mapper = ({ scrollY }: { scrollY: number }) => {
  progressMain: number;
  progressEntry: number;
  progressExit: number;
  progressState: S_Progress_State;
};
