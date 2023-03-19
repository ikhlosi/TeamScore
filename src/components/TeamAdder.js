import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TeamAdder = ({ addHandler }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => setText(value)}
        value={text}
        placeholder="New teams name..."
      />
      <Button
        title="ADD NEW TEAM"
        color="coral"
        onPress={() => addHandler(text)}
      />
    </View>
  );
};

export default TeamAdder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
