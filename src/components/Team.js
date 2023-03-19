import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Team = ({ name, score }) => {
  return (
    <TouchableOpacity>
      <Text>{name}</Text>
      <Text>{score}</Text>
    </TouchableOpacity>
  );
};

export default Team;

const styles = StyleSheet.create({});
