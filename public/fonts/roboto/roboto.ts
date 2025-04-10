import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: "./public/fonts/roboto/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./public/fonts/roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./public/fonts/roboto/Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./public/fonts/roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./public/fonts/roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./public/fonts/roboto/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./public/fonts/roboto/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export default roboto;
