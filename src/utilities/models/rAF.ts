export type RAF = {
  id: string;
  callback: () => void;
  throttleMS: number;
  invokeTimer: number;
};
