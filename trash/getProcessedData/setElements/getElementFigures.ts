import type { S_E_Figure_Data } from "@models";

type Props = {
  figures?: S_E_Figure_Data[];
};

export function getElementFigures({ figures }: Props): S_E_Figure_Data[] {
  return (figures ?? []).map((item) => {
    return {
      ...item,
      type: "figure",
    };
  });
}
