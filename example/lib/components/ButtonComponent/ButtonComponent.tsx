import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageStyle,
} from "react-native";
import styles from "./ButtonComponent.style";

export interface ButtonComponentProps {
  buttonText: string;
  disableButtonIcon: boolean;
  buttonIconComponent: React.ReactNode | React.ReactNode[];
  buttonContainerStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  buttonIconImageStyle?: StyleProp<ImageStyle>;
  buttonImageSource?: any;
  onButtonPress: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttonText = "Hotspot",
  onButtonPress,
  disableButtonIcon,
  buttonIconComponent,
  buttonContainerStyle,
  buttonTextStyle,
  buttonIconImageStyle,
  buttonImageSource = require("../../local-assets/right-arrow.png"),
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onButtonPress}>
      <View style={[styles.buttonContainer, buttonContainerStyle]}>
        <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
          {buttonText}
        </Text>
        {!disableButtonIcon && (
          <View style={styles.buttonIconStyle}>
            {buttonIconComponent || (
              <Image
                resizeMode="contain"
                source={buttonImageSource}
                style={[styles.iconImageStyle, buttonIconImageStyle]}
              />
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
