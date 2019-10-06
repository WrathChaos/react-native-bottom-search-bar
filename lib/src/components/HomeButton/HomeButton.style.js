export function homeButtonContainer(props) {
  const { homeButtonSize, homeButtonBackgroundColor } = props.props;
  return {
    alignItems: "center",
    justifyContent: "center",
    width: homeButtonSize || 30,
    height: homeButtonSize || 30,
    borderRadius: (homeButtonSize || 30) / 2,
    backgroundColor: homeButtonBackgroundColor || "#FFC484"
  };
}
