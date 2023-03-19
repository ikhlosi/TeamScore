import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Team from "./Team";

const TeamAdder = ({ data, addHandler }) => {
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
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Team name={item.name} score={item.score} />
            // <TodoItem item={props.item} pressHandler={deleteTodo} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default TeamAdder;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    margin: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
