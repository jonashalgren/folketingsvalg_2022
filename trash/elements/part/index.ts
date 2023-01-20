export type S_E_Part = {
  inputRange: [number, number];
  amount: number;
  color: string;
  rows: number;
  width: number;
  items: S_E_Part_Item[];
};

export type S_E_Part_Item = {
  inputRange: [number, number];
  disabled: number;
};
