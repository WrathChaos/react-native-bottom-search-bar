import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import BottomSearchBar from "react-native-bottom-search-bar";
import BottomSearchBar from "./lib/src/components/BottomSearchBar";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BottomSearchBar />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F5",
    alignItems: "center",
    justifyContent: "center"
  }
});
