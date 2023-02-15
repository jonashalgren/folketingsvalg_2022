import type { Props, DetailProps } from "./index";

export function setDetailList(item: Props) {
  return {
    ...item,
    detailList: <DetailProps[]>Object.values(item.partyCollection).flatMap((item) => {
      return [
        {
          partyLetter: item.partyLetter,
          color: item.color,
          image: item.leader,
          texture: "leader",
        },
        {
          partyLetter: item.partyLetter,
          color: item.color,
          image: item.logo,
          texture: "logo",
        },
        {
          partyLetter: item.partyLetter,
          color: item.color,
        },
      ];
    }),
  };
}
