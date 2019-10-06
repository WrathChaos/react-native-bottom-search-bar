import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { homeButtonContainer } from "./HomeButton.style";

const HomeButton = props => {
  const {
    homeButtonOnPress,
    homeButtonIconName,
    homeButtonIconType,
    homeButtonIconSize,
    homeButtonIconColor,
    homeButtonIconComponent
  } = props;
  return (
    <TouchableOpacity onPress={homeButtonOnPress}>
      <View style={homeButtonContainer(props)}>
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
  homeButtonIconSize: PropTypes.number
};

HomeButton.defaultProps = {
  homeButtonIconSize: 15,
  homeButtonIconName: "home",
  homeButtonIconType: "Entypo",
  homeButtonIconColor: "white"
};

export default HomeButton;
