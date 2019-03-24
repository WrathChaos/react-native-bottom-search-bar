import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { homeButtonContainer } from "./BottomSearchBar.style";

const HomeButton = props => {
  const {
    homeButtonOnPress,
    homeButtonIconName,
    homeButtonIconType,
    homeButtonIconSize,
    homeButtonIconColor,
    homeButtonIconComponent
  } = props.props;
  return (
    <TouchableOpacity onPress={homeButtonOnPress}>
      <View style={homeButtonContainer(props.props)}>
        {homeButtonIconComponent || (
          <Icon
            name={homeButtonIconName || "home"}
            type={homeButtonIconType || "Entypo"}
            size={homeButtonIconSize || 15}
            color={homeButtonIconColor || "white"}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default HomeButton;
