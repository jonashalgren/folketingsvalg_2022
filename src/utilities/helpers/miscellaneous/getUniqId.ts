import { pipe } from "@helpers";

function S4(str: string) {
  const hasDash = str.length !== 0;
  return `${hasDash ? str + "-" : str}${(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)}`;
}

export const getUniqId = () => pipe(S4, S4, S4, S4, S4, S4, S4, S4)("");
