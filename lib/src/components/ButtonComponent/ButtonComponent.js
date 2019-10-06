import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, {
  buttonContainer,
  buttonTextStyle
} from "./ButtonComponent.style";

const ButtonComponent = props => {
  const {
    buttonText,
    buttonOnPress,
    buttonFontSize,
    buttonIconName,
    buttonIconType,
    buttonIconColor,
    buttonIconSize,
    buttonTextColor,
    disableButtonIcon,
    buttonIconComponent,
    buttonBackgroundColor
  } = props;
  return (
    <TouchableOpacity
      onPress={buttonOnPress}
      style={styles.buttonContainerGlue}
    >
      <View style={buttonContainer(buttonBackgroundColor)}>
        <Text style={buttonTextStyle(buttonFontSize, buttonTextColor)}>
          {buttonText}
        </Text>
        {!disableButtonIcon && (
          <View style={styles.buttonIconStyle}>
            {buttonIconComponent || (
              <Icon
                name={buttonIconName}
                type={buttonIconType}
                size={buttonIconSize}
                color={buttonIconColor}
              />
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

ButtonComponent.propTypes = {
  buttonIconName: PropTypes.string,
  buttonIconType: PropTypes.string,
  buttonIconColor: PropTypes.string,
  buttonIconSize: PropTypes.number,
  buttonText: PropTypes.string
};

ButtonComponent.defaultProps = {
  buttonIconSize: 15,
  buttonIconName: "ios-arrow-forward",
  buttonIconColor: "white",
  buttonIconType: "Ionicons",
  buttonText: "Hotspot"
};

export default ButtonComponent;
