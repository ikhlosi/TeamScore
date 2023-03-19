import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Team = ({ name, score }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.teamName}>{name}</Text>
        <Text style={styles.teamScore}>{score}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    padding: 20,
  },
  teamName: {
    // alignSelf: "flex-start",
    // textAlign: "left",
  },

  teamScore: {
    // justifyContent: "flex-end",
    // textAlign: "right",
  },
});
