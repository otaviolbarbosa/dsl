import { SVGProps } from "react";

import { IconName, IconSize } from "..//UrIcon/helper";
import { ButtonVariant } from "..//UrButton/helper";

export type UrIconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: IconSize;
  variant?: ButtonVariant;
  disabled?: boolean;
};
