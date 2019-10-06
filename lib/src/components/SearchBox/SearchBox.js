import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-dynamic-vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles, { searchBoxContainer } from "./SearchBox.style";

const SearchBox = props => {
  const {
    iconName,
    iconType,
    iconSize,
    iconColor,
    onChangeText,
    searchBoxText,
    iconComponent,
    searchBoxOnPress
  } = props;
  return (
    <TouchableOpacity
      onPress={searchBoxOnPress}
      style={searchBoxContainer(props)}
    >
      <View style={styles.searchBoxGlue}>
        {iconComponent || (
          <Icon
            name={iconName}
            type={iconType}
            size={iconSize}
            color={iconColor}
          />
        )}
        <TextInput
          onChangeText={onChangeText}
          placeholder={searchBoxText}
          style={styles.searchBoxTextStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

SearchBox.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  searchBoxText: PropTypes.string
};

SearchBox.defaultProps = {
  iconSize: 25,
  iconName: "search",
  iconColor: "#90A2BD",
  iconType: "EvilIcons",
  searchBoxText: "What are you looking for?"
};

export default SearchBox;
