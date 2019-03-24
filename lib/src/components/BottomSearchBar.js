import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, {
  shadowStyle,
  glueContainer,
  buttonContainer,
  buttonTextStyle,
  searchBoxContainer
} from "./BottomSearchBar.style";

const BottomSearchBar = props => {
  const {
    iconName,
    iconType,
    iconSize,
    iconColor,
    buttonText,
    shadowColor,
    iconComponent,
    searchBoxText,
    buttonOnPress,
    buttonIconName,
    buttonIconType,
    buttonIconSize,
    buttonFontSize,
    buttonIconColor,
    buttonTextColor,
    searchBoxOnPress,
    disableButtonIcon,
    buttonIconComponent,
    buttonBackgroundColor
  } = props;
  return (
    <View style={styles.container}>
      <View style={[glueContainer(props), shadowStyle(shadowColor)]}>
        <View style={styles.glue}>
          <TouchableOpacity
            style={searchBoxContainer(props)}
            onPress={searchBoxOnPress}
          >
            <View style={styles.searchBoxGlue}>
              {iconComponent || (
                <Icon
                  name={iconName || "search"}
                  type={iconType || "EvilIcons"}
                  color={iconColor || "#90A2BD"}
                  size={iconSize || 25}
                />
              )}
              <Text style={styles.searchBoxTextStyle}>
                {searchBoxText || "What are you looking for?"}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={buttonOnPress}>
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
        </View>
      </View>
    </View>
  );
};

export default BottomSearchBar;
