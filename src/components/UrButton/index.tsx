import { useEffect, useState } from "react";
import { StyleSheet, TouchableHighlight, TouchableHighlightProps } from "react-native";
import { ButtonVariant, getBgColor, getBorderColor, getBorderRadius, getLabelColor, getPaddingHorizontal, getPaddingVertical, getShadowColor, getWidth } from "./helper";
import UrView from "../UrView";
import UrText from "../UrText";
import { IconName } from "../UrIcon/helper";
import UrIcon from "../UrIcon";

// import * as S from "./styles";

export type UrButtonProps = TouchableHighlightProps & {
  variant?: ButtonVariant;
  label?: string;
  icon?: IconName;
  isPressed?: boolean;
};

const UrButton = ({
  variant = "primary",
  label,
  icon,
  disabled,
  ...buttonProps
}: UrButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isIconButton, setIsIconButton] = useState(false);

  useEffect(
    () => setIsIconButton(["icon-primary", "icon-secondary"].includes(variant)),
    [variant]
  );

  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={getBgColor(variant, disabled)}

      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...buttonProps}
      style={styles({ variant, isPressed }).container}
    >
      <UrView>
        {icon && (
          <UrIcon
            name={icon}
            variant={variant}
            disabled={disabled}
          />
        )}
        {!isIconButton && label && (
          <UrText
            disabled={disabled}
            type={"button"}
            style={styles({ variant }).label}
          >
            {label}
          </UrText>
        )}
      </UrView>
    </TouchableHighlight>
  );
};

export default UrButton;

const styles = (props: UrButtonProps) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: getWidth(props.variant),
    paddingHorizontal: getPaddingHorizontal(props.variant),
    paddingVertical: getPaddingVertical(props.variant),
    backgroundColor: getBgColor(props.variant, props.disabled),
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: getBorderColor(props.variant, props.isPressed),
    borderRadius: getBorderRadius(props.variant),
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowColor: getShadowColor(props.variant, props.disabled),
    shadowOffset: { width: 0, height: 1},
    elevation: 1,
  },
  label: {
    color: getLabelColor(props.variant, props.disabled)
  }
})