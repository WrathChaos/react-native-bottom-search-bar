import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, { searchBoxContainer } from "./BottomSearchBar.style";

const SearchBox = props => {
  const {
    iconName,
    iconType,
    iconSize,
    iconColor,
    iconComponent,
    searchBoxText,
    searchBoxOnPress
  } = props.props;
  return (
    <TouchableOpacity
      style={searchBoxContainer(props)}
      onPress={searchBoxOnPress}
    >
      <View style={styles.searchBoxGlue}>
        {iconComponent || (
          <Icon
            name={iconName || "search"}
            type={iconType || "EvilIcons"}
            color={iconColor || "#90A2BD"}
            size={iconSize || 25}
          />
        )}
        <Text style={styles.searchBoxTextStyle}>
          {searchBoxText || "What are you looking for?"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchBox;
