import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-dynamic-vector-icons";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import styles, { searchBoxContainer } from "./SearchBox.style";

const SearchBox = props => {
  const {
    iconName,
    iconType,
    iconSize,
    iconColor,
    searchBoxText,
    iconComponent,
    searchBoxOnPress,
    disableTextInput,
    searchBoxWidth,
    searchBoxBorderRadius,
    searchBoxBackgroundColor
  } = props;

  renderTextInput = () => {
    if (disableTextInput)
      return <Text style={styles.searchBoxTextStyle}>{searchBoxText}</Text>;
    return (
      <TextInput
        placeholder={searchBoxText}
        style={styles.searchBoxTextStyle}
        {...props}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={searchBoxOnPress}
      style={searchBoxContainer(
        searchBoxWidth,
        searchBoxBorderRadius,
        searchBoxBackgroundColor
      )}
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
        {renderTextInput()}
      </View>
    </TouchableOpacity>
  );
};

SearchBox.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  searchBoxText: PropTypes.string,
  disableTextInput: PropTypes.bool,
  searchBoxBorderRadius: PropTypes.number,
  searchBoxBackgroundColor: PropTypes.string
};

SearchBox.defaultProps = {
  iconSize: 25,
  iconName: "search",
  iconColor: "#90A2BD",
  iconType: "EvilIcons",
  disableTextInput: false,
  searchBoxWidth: "55%",
  searchBoxBorderRadius: 20,
  searchBoxBackgroundColor: "#F5F7FA",
  searchBoxText: "What are you looking for?"
};

export default SearchBox;
