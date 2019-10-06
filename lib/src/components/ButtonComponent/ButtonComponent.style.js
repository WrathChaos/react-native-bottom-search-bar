export function buttonContainer(buttonBackgroundColor) {
  return {
    width: 85,
    padding: 8,
    borderRadius: 16,
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
  buttonIconStyle: {
    top: 1,
    left: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainerGlue: {
    right: 36,
    position: "absolute"
  }
};
