export type Motion<T> = {
  inputRange: MotionInput;
  outputRange: MotionOutput<T>;
};

export type MotionInput = number[];

export type MotionOutput<T> = T[];
