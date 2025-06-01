import {
  Font,
  renderToFile,
} from "@react-pdf/renderer";
import React from "react";

import Resume from "./Resume";

const font1Path = "./fonts/sf-pro-display";
Font.register({
  family: "SF Pro Display", fonts: [
    {
      src: `${font1Path}/SF-Pro-Display-Thin.otf`,
      fontStyle: "normal",
      fontWeight: "thin"
    },
    {
      src: `${font1Path}/SF-Pro-Display-ThinItalic.otf`,
      fontStyle: "italic",
      fontWeight: "thin"
    },
    {
      src: `${font1Path}/SF-Pro-Display-Ultralight.otf`,
      fontStyle: "normal",
      fontWeight: "ultralight"
    },
    {
      src: `${font1Path}/SF-Pro-Display-UltralightItalic.otf`,
      fontStyle: "italic",
      fontWeight: "ultralight"
    },
    {
      src: `${font1Path}/SF-Pro-Display-Light.otf`,
      fontStyle: "normal",
      fontWeight: "light"
    },
    {
      src: `${font1Path}/SF-Pro-Display-LightItalic.otf`,
      fontStyle: "italic",
      fontWeight: "light"
    },
    {
      src: `${font1Path}/SF-Pro-Display-Regular.otf`,
      fontStyle: "normal",
      fontWeight: "normal"
    },
    {
      src: `${font1Path}/SF-Pro-Display-RegularItalic.otf`,
      fontStyle: "italic",
      fontWeight: "normal"
    },
    {
      src: `${font1Path}/SF-Pro-Display-Medium.otf`,
      fontStyle: "normal",
      fontWeight: "medium"
    },
    {
      src: `${font1Path}/SF-Pro-Display-MediumItalic.otf`,
      fontStyle: "italic",
      fontWeight: "medium"
    },
    {
      src: `${font1Path}/SF-Pro-Display-Semibold.otf`,
      fontStyle: "normal",
      fontWeight: "semibold"
    },
    {
      src: `${font1Path}/SF-Pro-Display-SemiboldItalic.otf`,
      fontStyle: "italic",
      fontWeight: "semibold"
    },
    {
      src: `${font1Path}/SF-Pro-Display-Bold.otf`,
      fontStyle: "normal",
      fontWeight: "bold"
    },
    {
      src: `${font1Path}/SF-Pro-Display-BoldItalic.otf`,
      fontStyle: "italic",
      fontWeight: "bold"
    },
    {
      src: `${font1Path}/SF-Pro-Display-Black.otf`,
      fontStyle: "normal",
      fontWeight: "ultrabold"
    },
    {
      src: `${font1Path}/SF-Pro-Display-BlackItalic.otf`,
      fontStyle: "italic",
      fontWeight: "ultrabold"
    },
    {
      src: `${font1Path}/SF-Pro-Display-Heavy.otf`,
      fontStyle: "normal",
      fontWeight: "heavy"
    },
    {
      src: `${font1Path}/SF-Pro-Display-HeavyItalic.otf`,
      fontStyle: "italic",
      fontWeight: "heavy"
    },
  ],
});

const font2Path = "./fonts/hasklug";
Font.register({
  family: "hasklug", fonts: [
    {
      src: `${font2Path}/HasklugNerdFont-ExtraLightItalic.otf`,
      fontStyle: "italic",
      fontWeight: "ultralight",
    },
    {
      src: `${font2Path}/HasklugNerdFont-LightItalic.otf`,
      fontStyle: "italic",
      fontWeight: "light",
    },
    {
      src: `${font2Path}/HasklugNerdFont-Italic.otf`,
      fontStyle: "italic",
      fontWeight: "normal",
    },
    {
      src: `${font2Path}/HasklugNerdFont-MediumItalic.otf`,
      fontStyle: "italic",
      fontWeight: "medium",
    },
    {
      src: `${font2Path}/HasklugNerdFont-SemiBoldItalic.otf`,
      fontStyle: "italic",
      fontWeight: "semibold",
    },
    {
      src: `${font2Path}/HasklugNerdFont-BoldItalic.otf`,
      fontStyle: "italic",
      fontWeight: "bold",
    },
    {
      src: `${font2Path}/HasklugNerdFont-BlackItalic.otf`,
      fontStyle: "italic",
      fontWeight: "heavy",
    },
    {
      src: `${font2Path}/HasklugNerdFont-ExtraLight.otf`,
      fontStyle: "normal",
      fontWeight: "ultralight",
    },
    {
      src: `${font2Path}/HasklugNerdFont-Light.otf`,
      fontStyle: "normal",
      fontWeight: "light",
    },
    {
      src: `${font2Path}/HasklugNerdFont-Regular.otf`,
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: `${font2Path}/HasklugNerdFont-Medium.otf`,
      fontStyle: "normal",
      fontWeight: "medium",
    },
    {
      src: `${font2Path}/HasklugNerdFont-SemiBold.otf`,
      fontStyle: "normal",
      fontWeight: "semibold",
    },
    {
      src: `${font2Path}/HasklugNerdFont-Bold.otf`,
      fontStyle: "normal",
      fontWeight: "bold",
    },
    {
      src: `${font2Path}/HasklugNerdFont-Black.otf`,
      fontStyle: "normal",
      fontWeight: "heavy",
    },
  ]
});

const output = `${process.cwd()}/resume.pdf`;
renderToFile(<Resume />, output);
console.log(`compiled pdf to ${output}`);
