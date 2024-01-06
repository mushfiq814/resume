import {
  Font,
  renderToFile,
} from "@react-pdf/renderer";
import React from "react";

import Resume from "./Resume";

const fontPath = "./fonts/sf-pro-display";
Font.register({
  family: "SF Pro Display", fonts: [
    {
      src: `${fontPath}/SF-Pro-Display-Thin.otf`,
      fontStyle: "normal",
      fontWeight: "thin"
    },
    {
      src: `${fontPath}/SF-Pro-Display-ThinItalic.otf`,
      fontStyle: "italic",
      fontWeight: "thin"
    },
    {
      src: `${fontPath}/SF-Pro-Display-Ultralight.otf`,
      fontStyle: "normal",
      fontWeight: "ultralight"
    },
    {
      src: `${fontPath}/SF-Pro-Display-UltralightItalic.otf`,
      fontStyle: "italic",
      fontWeight: "ultralight"
    },
    {
      src: `${fontPath}/SF-Pro-Display-Light.otf`,
      fontStyle: "normal",
      fontWeight: "light"
    },
    {
      src: `${fontPath}/SF-Pro-Display-LightItalic.otf`,
      fontStyle: "italic",
      fontWeight: "light"
    },
    {
      src: `${fontPath}/SF-Pro-Display-Regular.otf`,
      fontStyle: "normal",
      fontWeight: "normal"
    },
    {
      src: `${fontPath}/SF-Pro-Display-RegularItalic.otf`,
      fontStyle: "italic",
      fontWeight: "normal"
    },
    {
      src: `${fontPath}/SF-Pro-Display-Medium.otf`,
      fontStyle: "normal",
      fontWeight: "medium"
    },
    {
      src: `${fontPath}/SF-Pro-Display-MediumItalic.otf`,
      fontStyle: "italic",
      fontWeight: "medium"
    },
    {
      src: `${fontPath}/SF-Pro-Display-Semibold.otf`,
      fontStyle: "normal",
      fontWeight: "semibold"
    },
    {
      src: `${fontPath}/SF-Pro-Display-SemiboldItalic.otf`,
      fontStyle: "italic",
      fontWeight: "semibold"
    },
    {
      src: `${fontPath}/SF-Pro-Display-Bold.otf`,
      fontStyle: "normal",
      fontWeight: "bold"
    },
    {
      src: `${fontPath}/SF-Pro-Display-BoldItalic.otf`,
      fontStyle: "italic",
      fontWeight: "bold"
    },
    {
      src: `${fontPath}/SF-Pro-Display-Black.otf`,
      fontStyle: "normal",
      fontWeight: "ultrabold"
    },
    {
      src: `${fontPath}/SF-Pro-Display-BlackItalic.otf`,
      fontStyle: "italic",
      fontWeight: "ultrabold"
    },
    {
      src: `${fontPath}/SF-Pro-Display-Heavy.otf`,
      fontStyle: "normal",
      fontWeight: "heavy"
    },
    {
      src: `${fontPath}/SF-Pro-Display-HeavyItalic.otf`,
      fontStyle: "italic",
      fontWeight: "heavy"
    },
  ]
});

const output = `${process.cwd()}/resume.pdf`;
renderToFile(<Resume />, output);
console.log(`compiled pdf to ${output}`);
