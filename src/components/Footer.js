import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = ({ handleIncrement, handleCancel }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed && { backgroundColor: "rgb(210, 230, 255)" },
        ]}
        onPress={handleIncrement}
      >
        <Text>+</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed && { backgroundColor: "rgb(210, 230, 255)" },
        ]}
        onPress={handleCancel}
      >
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
