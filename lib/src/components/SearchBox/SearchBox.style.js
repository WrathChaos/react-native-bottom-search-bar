export function searchBoxContainer(props) {
  const {
    searchBoxWidth,
    searchBoxBorderRadius,
    searchBoxBackgroundColor
  } = props.props;
  return {
    left: 8,
    padding: 6,
    width: searchBoxWidth || "55%",
    borderRadius: searchBoxBorderRadius || 20,
    backgroundColor: searchBoxBackgroundColor || "#F5F7FA"
  };
}

export default {
  searchBoxGlue: {
    alignItems: "center",
    flexDirection: "row"
  },
  searchBoxTextStyle: {
    left: 3,
    height: 25,
    width: "85%",
    fontSize: 12,
    color: "#90A2BD"
  }
};
