import type { Party_Collection, Party_Letter } from "@models";
import { elections_result_party_overview } from "@assets";
import A_Logo from "./images/logo/A.svg";
import B_Logo from "./images/logo/B.svg";
import C_Logo from "./images/logo/C.svg";
import D_Logo from "./images/logo/D.svg";
import F_Logo from "./images/logo/F.svg";
import I_Logo from "./images/logo/I.svg";
import K_Logo from "./images/logo/K.svg";
import M_Logo from "./images/logo/M.svg";
import O_Logo from "./images/logo/O.svg";
import V_Logo from "./images/logo/V.svg";
import Q_Logo from "./images/logo/Q.svg";
import AE_Logo from "./images/logo/AE.svg";
import OE_Logo from "./images/logo/OE.svg";
import AA_Logo from "./images/logo/AA.svg";
import A_Leader from "./images/leader/A.jpg";
import B_Leader from "./images/leader/B.jpg";
import C_Leader from "./images/leader/C.jpg";
import D_Leader from "./images/leader/D.jpg";
import F_Leader from "./images/leader/F.jpg";
import I_Leader from "./images/leader/I.jpg";
import K_Leader from "./images/leader/K.jpg";
import M_Leader from "./images/leader/M.jpg";
import O_Leader from "./images/leader/O.jpg";
import V_Leader from "./images/leader/V.jpg";
import Q_Leader from "./images/leader/Q.jpg";
import AE_Leader from "./images/leader/AE.jpg";
import OE_Leader from "./images/leader/OE.jpg";
import AA_Leader from "./images/leader/AA.jpg";

type Props = {
  partyLetter: Party_Letter;
};

function getPartyResult({ partyLetter }: Props) {
  return elections_result_party_overview.find((item) => item.partyLetter === partyLetter);
}

export const partyCollection: Party_Collection = {
  A: {
    color: "#A82721",
    secondaryColor: "#EB9994",
    partyLetter: "A",
    name: "Socialdemokratiet",
    shortName: "Soc.dem.",
    logo: A_Logo,
    leader: A_Leader,
    ...getPartyResult({ partyLetter: "A" }),
  },
  B: {
    color: "#733280",
    secondaryColor: "#C29BC9",
    partyLetter: "B",
    name: "Radikale Venstre",
    shortName: "Radikale",
    logo: B_Logo,
    leader: B_Leader,
    ...getPartyResult({ partyLetter: "B" }),
  },
  C: {
    color: "#96B226",
    secondaryColor: "#D4E495",
    partyLetter: "C",
    name: "Konservative",
    shortName: "Kons",
    logo: C_Logo,
    leader: C_Leader,
    ...getPartyResult({ partyLetter: "C" }),
  },
  D: {
    color: "#127B7F",
    secondaryColor: "#88C5C8",
    partyLetter: "D",
    name: "Nye Borgerlige",
    shortName: "Nye B.",
    logo: D_Logo,
    leader: D_Leader,
    ...getPartyResult({ partyLetter: "D" }),
  },
  F: {
    color: "#E07EA8",
    secondaryColor: "#FCC2DC",
    partyLetter: "F",
    name: "Socialistisk Folkeparti",
    shortName: "SF",
    logo: F_Logo,
    leader: F_Leader,
    ...getPartyResult({ partyLetter: "F" }),
  },
  I: {
    color: "#3FB2BE",
    secondaryColor: "#9FE4EA",
    partyLetter: "I",
    name: "Liberal Alliance",
    shortName: "Lib.Al",
    logo: I_Logo,
    leader: I_Leader,
    ...getPartyResult({ partyLetter: "I" }),
  },
  K: {
    color: "#8B8474",
    secondaryColor: "#CDC9BE",
    partyLetter: "K",
    name: "Kristendemokraterne",
    shortName: "KD",
    logo: K_Logo,
    leader: K_Leader,
    ...getPartyResult({ partyLetter: "K" }),
  },
  M: {
    color: "#B48CD2",
    secondaryColor: "#D2BEDC",
    partyLetter: "M",
    name: "Moderaterne",
    shortName: "Moderat.",
    logo: M_Logo,
    leader: M_Leader,
    ...getPartyResult({ partyLetter: "M" }),
  },
  O: {
    color: "#EAC73E",
    secondaryColor: "#FFEBA0",
    partyLetter: "O",
    name: "Dansk Folkeparti",
    shortName: "DF",
    logo: O_Logo,
    leader: O_Leader,
    ...getPartyResult({ partyLetter: "O" }),
  },
  Q: {
    color: "#5ABE82",
    secondaryColor: "#93DBB2",
    partyLetter: "Q",
    name: "Frie Grønne",
    shortName: "Frie G.",
    logo: Q_Logo,
    leader: Q_Leader,
    ...getPartyResult({ partyLetter: "Q" }),
  },
  V: {
    color: "#254264",
    secondaryColor: "#95A8BA",
    partyLetter: "V",
    name: "Venstre",
    shortName: "Venstre",

    logo: V_Logo,
    leader: V_Leader,
    ...getPartyResult({ partyLetter: "V" }),
  },
  Æ: {
    color: "#7896D2",
    secondaryColor: "#B3C4E6",
    partyLetter: "Æ",
    name: "Danmarksdemokraterne",
    shortName: "Dan.dem.",
    logo: AE_Logo,
    leader: AE_Leader,
    ...getPartyResult({ partyLetter: "Æ" }),
  },
  Ø: {
    color: "#E6801A",
    secondaryColor: "#FFC58E",
    partyLetter: "Ø",
    name: "Enhedslisten",
    shortName: "Enhl.",
    logo: OE_Logo,
    leader: OE_Leader,
    ...getPartyResult({ partyLetter: "Ø" }),
  },
  Å: {
    color: "#2B8738",
    secondaryColor: "#9BD1A2",
    partyLetter: "Å",
    name: "Alternativet",
    shortName: "Alt.",
    logo: AA_Logo,
    leader: AA_Leader,
    ...getPartyResult({ partyLetter: "Å" }),
  },
};
