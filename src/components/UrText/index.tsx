// import * as S from "./styles";
import { StyleSheet, Text, TextProps } from "react-native";

import {
  TextType,
  fontCase,
  fontFamily,
  fontSize,
  letterSpacing,
  lineHeight,
} from "./helper";
import { Colors } from "../../utils";
// import { UrTextProps } from "./styles";

export type UrTextProps = TextProps & {
  type?: TextType;
  bold?: boolean;
  upperCase?: boolean;
  children: React.ReactNode;
};

const UrText = ({
  children,
  type = "body",
  upperCase = false,
  bold = false,
  ...textProps
}: UrTextProps) => {
  return (
    <Text
      {...textProps}
      style={[textProps.style, styles({ type, upperCase, bold }).text]}
    >
      {children}
    </Text>
  );
};

export default UrText;

const styles = (props: Omit<UrTextProps, "children">) =>
  StyleSheet.create({
    text: {
      fontFamily: fontFamily(props.type, props.bold),
      fontSize: fontSize(props.type),
      lineHeight: lineHeight(props.type),
      textTransform: fontCase(props.type, props.upperCase),
      letterSpacing: letterSpacing(props.type),
    },
  });
