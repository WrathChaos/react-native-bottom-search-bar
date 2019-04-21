import React from "react";
import { View } from "react-native";
import SearchBox from "./SearchBox";
import HomeButton from "./HomeButton";
import ButtonComponent from "./ButtonComponent";
import styles, { _shadowStyle, glueContainer } from "./BottomSearchBar.style";

const BottomSearchBar = props => {
  const { shadowColor, shadowStyle, disableButton, disableHomeButton } = props;
  return (
    <View style={styles.container}>
      <View
        style={[glueContainer(props), shadowStyle || _shadowStyle(shadowColor)]}
      >
        <View style={styles.glue}>
          {!disableHomeButton && <HomeButton props={props} />}
          <SearchBox props={props} />
          {!disableButton && <ButtonComponent props={props} />}
        </View>
      </View>
    </View>
  );
};

export default BottomSearchBar;
