import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import TeamAdder from "./src/components/TeamAdder";

export default function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [teams, setTeams] = useState([
    { id: 1, name: "BeatUp", score: score1 },
    { id: 2, name: "Justified", score: score2 },
  ]);

  const addTeam = (teamName) => {
    // check if
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <TeamAdder data={teams} addHandler={addTeam} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
