export type Motion<T> = {
  inputRange: Motion_Input;
  outputRange: Motion_Output<T>;
};

export type Motion_Input = number[];

export type Motion_Output<T> = T[];
