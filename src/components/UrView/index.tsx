import { View, type ViewProps } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// export type UrViewProps = ViewProps & {
export type UrViewProps = ViewProps & {
  safeArea?: boolean;
  lightColor?: string;
  darkColor?: string;
};

const UrView = ({
  style,
  lightColor,
  darkColor,
  safeArea = false,
  ...otherProps
}: UrViewProps) => {
  if (safeArea) return <SafeAreaView style={style} {...otherProps} />;
  return <View style={style} {...otherProps} />;
};

export default UrView;
