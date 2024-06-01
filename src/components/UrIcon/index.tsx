import { Image } from "react-native";

import { getIcon, getSize } from "./helper";
import { UrIconProps } from "./styles";

const UrIcon = ({ name, size = "sm", ...props }: UrIconProps) => {
  const Icon = getIcon(name);

  // return <Image source={{ uri: "../../assets/images/icons/canada.svg" }} />;
  return <Icon width={getSize(size)} height={getSize(size)} {...props} />;
};

export default UrIcon;
