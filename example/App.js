import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSearchBar from "react-native-bottom-search-bar";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <BottomSearchBar onChangeText={text => console.log(text)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
