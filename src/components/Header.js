import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
