import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import SearchBox from "./SearchBox";
import ButtonComponent from "./ButtonComponent";
import HomeButton from "./HomeButton";
import styles, { shadowStyle, glueContainer } from "./BottomSearchBar.style";

const BottomSearchBar = props => {
  const { shadowColor, disableButton, disableHomeButton } = props;
  return (
    <View style={styles.container}>
      <View style={[glueContainer(props), shadowStyle(shadowColor)]}>
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
