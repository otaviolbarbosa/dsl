export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "small"
  | "icon-primary"
  | "icon-secondary";

import { Colors } from "../../utils";

export const getBgColor = (
  variant: ButtonVariant = "primary",
  isDisabled = false
) => {
  switch (variant) {
    case "primary":
      return isDisabled ? Colors.red2 : Colors.flameRed;
    case "secondary":
      return isDisabled ? Colors.grey3 : Colors.black;
    case "tertiary":
      return Colors.grey4;
    case "small":
      return "transparent";
    case "icon-primary":
      return isDisabled ? Colors.grey4 : Colors.red2;
    case "icon-secondary":
      return isDisabled ? Colors.grey4 : Colors.white;
  }
};

export const getShadowColor = (
  variant: ButtonVariant = "primary",
  isDisabled = false
) => {
  switch (variant) {
    case "primary":
      return isDisabled ? "transparent" : Colors.flameRed;
    case "secondary":
    case "tertiary":
    case "small":
    case "icon-primary":
      return "transparent";
    case "icon-secondary":
      return Colors.grey2;
  }
};

export const getLabelColor = (
  variant: ButtonVariant = "primary",
  isDisabled = false
) => {
  switch (variant) {
    case "primary":
      return Colors.white;
    case "secondary":
      return Colors.white;
    case "tertiary":
      return isDisabled ? Colors.grey3 : Colors.grey2;
    case "small":
      return isDisabled ? Colors.grey3 : Colors.flameRed;
    case "icon-primary":
      return isDisabled ? Colors.grey2 : Colors.red;
    case "icon-secondary":
      return isDisabled ? Colors.grey2 : Colors.black;
  }
};

export const getWidth = (variant: ButtonVariant = "primary") => {
  switch (variant) {
    case "small":
    case "icon-primary":
    case "icon-secondary":
      return "auto";
    default:
      return "100%";
  }
};

export const getPaddingHorizontal = (variant: ButtonVariant = "primary") => {
  switch (variant) {
    case "icon-primary":
    case "icon-secondary":
      return 6;
    default:
      return 16;
  }
};

export const getPaddingVertical = (variant: ButtonVariant = "primary") => {
  switch (variant) {
    case "icon-primary":
    case "icon-secondary":
      return 6;
    default:
      return 6;
  }
};

export const getBorderRadius = (variant: ButtonVariant = "primary") => {
  switch (variant) {
    case "icon-secondary":
      return 30;
    default:
      return 12;
  }
};

export const getBorderColor = (
  variant: ButtonVariant = "primary",
  isButtonPressed = false
) => {
  switch (variant) {
    case "primary":
      return isButtonPressed ? Colors.red : "transparent";
    case "secondary":
      return isButtonPressed ? Colors.grey3 : "transparent";
    case "tertiary":
      return isButtonPressed ? Colors.red : "transparent";
    case "small":
      return isButtonPressed ? Colors.red : "transparent";
    case "icon-primary":
      return isButtonPressed ? Colors.red : "transparent";
    case "icon-secondary":
      return isButtonPressed ? Colors.red : "transparent";
  }
};
