import { Platform } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

export function _shadowStyle(shadowColor) {
  return {
    ...Platform.select({
      ios: {
        shadowColor: shadowColor || "rgba(0,0,0,0.2)",
        shadowOffset: {
          width: 0,
          height: -3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      android: {
        elevation: 2
      }
    })
  };
}

export function glueContainer(props) {
  const {
    height,
    iPhoneXHeight,
    borderTopLeftRadius,
    borderTopRightRadius,
    backgroundColor
  } = props;
  return {
    ...ifIphoneX(
      {
        height: iPhoneXHeight || height || 100
      },
      {
        height: height || 80
      }
    ),
    backgroundColor: backgroundColor || "#fff",
    borderTopLeftRadius: borderTopLeftRadius || 24,
    borderTopRightRadius: borderTopRightRadius || 24
  };
}

export default {
  container: {
    bottom: 0,
    width: "100%",
    position: "absolute"
  },
  glue: {
    margin: 16,
    width: "100%",
    alignItems: "center",
    flexDirection: "row"
  }
};
