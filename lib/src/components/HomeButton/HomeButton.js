import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { homeButtonContainer } from "./HomeButton.style";

const HomeButton = props => {
  const {
    homeButtonSize,
    homeButtonOnPress,
    homeButtonIconName,
    homeButtonIconType,
    homeButtonIconSize,
    homeButtonIconColor,
    homeButtonIconComponent,
    homeButtonBackgroundColor
  } = props;
  return (
    <TouchableOpacity onPress={homeButtonOnPress}>
      <View
        style={homeButtonContainer(homeButtonSize, homeButtonBackgroundColor)}
      >
        {homeButtonIconComponent || (
          <Icon
            name={homeButtonIconName}
            type={homeButtonIconType}
            size={homeButtonIconSize}
            color={homeButtonIconColor}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

HomeButton.propTypes = {
  homeButtonIconName: PropTypes.string,
  homeButtonIconType: PropTypes.string,
  homeButtonIconColor: PropTypes.string,
  homeButtonIconSize: PropTypes.number,
  homeButtonSize: PropTypes.number,
  homeButtonBackgroundColor: PropTypes.string
};

HomeButton.defaultProps = {
  homeButtonIconSize: 15,
  homeButtonIconName: "home",
  homeButtonIconType: "Entypo",
  homeButtonIconColor: "white",
  homeButtonSize: 30,
  homeButtonBackgroundColor: "#FFC484"
};

export default HomeButton;
