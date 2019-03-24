import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, {
  buttonContainer,
  buttonTextStyle
} from "./BottomSearchBar.style";

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
  } = props.props;
  return (
    <TouchableOpacity
      style={styles.buttonContainerGlue}
      onPress={buttonOnPress}
    >
      <View style={buttonContainer(buttonBackgroundColor)}>
        <Text style={buttonTextStyle(buttonFontSize, buttonTextColor)}>
          {buttonText || "Hotspot"}
        </Text>
        {!disableButtonIcon && (
          <View style={styles.buttonIconStyle}>
            {buttonIconComponent || (
              <Icon
                name={buttonIconName || "ios-arrow-forward"}
                type={buttonIconType || "Ionicons"}
                color={buttonIconColor || "white"}
                size={buttonIconSize || 15}
              />
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
