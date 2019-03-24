import { Platform } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

export function shadowStyle(shadowColor) {
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

export function searchBoxContainer(props) {
  const {
    searchBoxWidth,
    searchBoxBorderRadius,
    searchBoxBackgroundColor
  } = props;
  return {
    padding: 6,
    width: searchBoxWidth || "60%",
    borderRadius: searchBoxBorderRadius || 20,
    backgroundColor: searchBoxBackgroundColor || "#F5F7FA"
  };
}

export function buttonContainer(buttonBackgroundColor) {
  return {
    left: 12,
    width: 85,
    padding: 8,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: buttonBackgroundColor || "#FFC484"
  };
}

export function buttonTextStyle(buttonFontSize, buttonTextColor) {
  return {
    fontWeight: "600",
    fontSize: buttonFontSize || 12,
    color: buttonTextColor || "white"
  };
}

export default {
  container: {
    bottom: 0,
    width: "100%",
    position: "absolute"
  },
  glue: {
    left: 12,
    margin: 16,
    width: "100%",
    alignItems: "center",
    flexDirection: "row"
  },
  searchBoxGlue: {
    alignItems: "center",
    flexDirection: "row"
  },
  searchBoxTextStyle: {
    left: 3,
    fontSize: 12,
    color: "#90A2BD"
  },
  buttonIconStyle: {
    top: 1,
    left: 2,
    alignItems: "center",
    justifyContent: "center"
  }
};
