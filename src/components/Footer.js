import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = ({ handleIncrement }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={handleIncrement}>
        <Text>+</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Text>Cancel game</Text>
      </Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "flex-start",
  },
  pressable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    margin: 10,
    padding: 10,
  },
});
