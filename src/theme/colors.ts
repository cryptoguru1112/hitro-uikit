import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#00af89",
  primaryBright: "#1ac486",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#00af89",
  warning: "#FFB237",
  tag: "#F9F9F9",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#7A6EAA",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#44efca",
  background: "#36304a",
  backgroundDisabled: "#4a5568",
  backgroundAlt: "#0d1017",
  cardBorder: "#161a22",
  contrast: "#FFFFFF",
  dropdown: "#2d3748",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#2d3748",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#7c8083",
  textSubtle: "#44efca",
  disabled: "#4a5568",
  gradients: {
    bubblegum: "linear-gradient(244deg,#2c3e50 0%,#181a28 100%)",
    inverseBubblegum: "linear-gradient(152deg,rgb(71 68 94) 0%,rgb(64 57 46) 100%)",
    cardHeader: "linear-gradient(166.77deg, rgb(59, 65, 85) 0%, rgb(58, 48, 69) 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
