export type TextType =
  | "display"
  | "headline"
  | "subtitle"
  | "button"
  | "body"
  | "body_small"
  | "caption";

const fontFamilyObj = {
  display: "GoogleSans-Bold",
  headline: "GoogleSans-Bold",
  subtitle: "GoogleSans-Medium",
  button: "GoogleSans-Bold",
  body: "GoogleSans-Light",
  body_small: "GoogleSans-Light",
  caption: "GoogleSans-Light",
};

const fontFamilyBoldObj = {
  display: "GoogleSans-Bold",
  headline: "GoogleSans-Bold",
  subtitle: "GoogleSans-Medium",
  button: "GoogleSans-Bold",
  body: "GoogleSans-Medium",
  body_small: "GoogleSans-Regular",
  caption: "GoogleSans-Regular",
};

const fontSizeObj = {
  display: 26,
  headline: 20,
  subtitle: 18,
  button: 18,
  body: 16,
  body_small: 14,
  caption: 12,
};

const fontWeightObj = {
  display: 700,
  headline: 700,
  subtitle: 500,
  button: 700,
  body: 400,
  body_small: 600,
  caption: 600,
};

export const lineHeightObj = {
  display: 26,
  headline: 26,
  subtitle: 24,
  button: 24,
  body: 24,
  body_small: 24,
  caption: 16,
};

export const letterSpacingObj = {
  display: 2,
  headline: 0.4,
  subtitle: 0.4,
  button: 0.4,
  body: 0.4,
  body_small: 1,
  caption: 1,
};

// end

export const fontFamily = (type: TextType = "body", isBold = false) => {
  if (isBold) {
    return fontFamilyBoldObj[type];
  }

  return fontFamilyObj[type];
};

export const fontSize = (type: TextType = "body") => fontSizeObj[type];

export const fontWeight = (type: TextType = "body", isBold = false) =>
  isBold ? 700 : fontWeightObj[type];

export const lineHeight = (type: TextType = "body") => lineHeightObj[type];

export const fontCase = (type: TextType = "body", isUpperCase = false) => {
  return isUpperCase || type === "display" ? "uppercase" : "none";
};

export const letterSpacing = (type: TextType = "body") =>
  letterSpacingObj[type];
