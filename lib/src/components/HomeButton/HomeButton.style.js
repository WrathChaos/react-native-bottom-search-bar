export function homeButtonContainer(homeButtonSize, homeButtonBackgroundColor) {
  return {
    alignItems: "center",
    justifyContent: "center",
    width: homeButtonSize,
    height: homeButtonSize,
    borderRadius: homeButtonSize / 2,
    backgroundColor: homeButtonBackgroundColor
  };
}
