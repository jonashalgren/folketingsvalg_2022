export type S_Progress_State = "active" | "inactive" | "next";

export type S_Progress = {
  main: number;
  entry: number;
  exit: number;
  state: S_Progress_State;
};

export type S_Progress_Mapper = ({ scrollY }: { scrollY: number }) => S_Progress;
