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
import ArrowIMG from "../../local-assets/right-arrow.png";

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export interface ButtonComponentProps {
  buttonText: string;
  disableButtonIcon: boolean;
  buttonIconComponent: React.ReactNode | React.ReactNode[];
  buttonContainerStyle?: CustomViewStyleProp;
  buttonTextStyle?: CustomTextStyleProp;
  buttonIconImageStyle?: CustomImageStyleProp;
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
  buttonImageSource = ArrowIMG,
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
