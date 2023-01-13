import type { Props } from "./index";

export function setTextData(item: Props) {
  return {
    ...item,
    textData: item.data.reduce((a, b) => {
      if (b.scenenr !== "") {
        return [...a, [b?.tekst ?? ""]];
      } else {
        const lastIndex = a.length - 1;
        const arr = a.filter((_: any, index: number) => index !== lastIndex);
        return [...arr, [...a[lastIndex], b.tekst]];
      }
    }, []),
  };
}
