import React from "react";
import { View } from "react-native";
import HomeButton from "./components/HomeButton/HomeButton";
import SearchBox from "./components/SearchBox/SearchBox";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import styles, { _shadowStyle, glueContainer } from "./BottomSearchBar.style";

const BottomSearchBar = props => {
  const {
    shadowColor,
    shadowStyle,
    disableButton,
    disableHomeButton,
    buttonComponent
  } = props;
  return (
    <View style={styles.container}>
      <View
        style={[glueContainer(props), shadowStyle || _shadowStyle(shadowColor)]}
      >
        <View style={styles.glue}>
          {!disableHomeButton && <HomeButton {...props} />}
          <SearchBox {...props} />
          {(!disableButton && buttonComponent) || (
            <ButtonComponent {...props} />
          )}
        </View>
      </View>
    </View>
  );
};

export default BottomSearchBar;
