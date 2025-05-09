import localfont from "next/font/local";

export const sirwan_light = localfont({
  src: [
    {
      path: "../../public/fonts/UniSIRWAN Expo Light.ttf",
      weight: "normal",
    },
  ],
  variable: "--font-sirwan-light",
  weight: "300",
});
export const sirwan_reguler = localfont({
  src: [
    {
      path: "../../public/fonts/UniSIRWAN Expo Regular.ttf",
      weight: "normal",
    },
  ],
  variable: "--font-sirwan-reguler",
  weight: "400",
});
export const sirwan_meduim = localfont({
  src: [
    {
      path: "../../public/fonts/UniSIRWAN Expo Medium.ttf",
      weight: "normal",
    },
  ],
  variable: "--font-sirwan-meduim",
  weight: "500",
});
export const sirwan_bold = localfont({
  src: [
    {
      path: "../../public/fonts/UniSIRWAN Expo Bold.ttf",
      weight: "normal",
    },
  ],
  variable: "--font-sirwan-bold",
});
