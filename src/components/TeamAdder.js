import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Team from "./Team";

const TeamAdder = ({ data, addHandler, changeSelection, selectedTeamId }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      {data.length < 2 && (
        <>
          <TextInput
            onChangeText={(value) => setText(value)}
            value={text}
            placeholder="New teams name..."
          />
          <Button
            title="ADD NEW TEAM"
            color="coral"
            onPress={() => {
              addHandler(text);
              setText("");
            }}
          />
        </>
      )}
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Team
              id={item.id}
              name={item.name}
              score={item.score}
              changeSelection={changeSelection}
              isSelected={selectedTeamId === item.id}
            />
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
    flex: 1,
    margin: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
