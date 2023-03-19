import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import TeamAdder from "./src/components/TeamAdder";
import uuid from "react-native-uuid";

export default function App() {
  // Teams
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [teams, setTeams] = useState([
    { id: uuid.v4(), name: "BeatUp", score: score1 },
    { id: uuid.v4(), name: "Justified", score: score2 },
  ]);

  // Team adder
  const addTeam = (teamName) => {
    if (teamName.length < 5) {
      Alert.alert(
        "Fout",
        "De naam van een team bestaat uit minstens 5 karakters",
        [
          {
            text: "Ok",
            onPress: () => {
              console.log("Ok btn pressed");
            },
          },
        ]
      );
      return;
    }
    if (teams && teams[0].name.toLowerCase() === teamName.toLowerCase()) {
      Alert.alert("Fout", "Een team met deze naam bestaat reeds", [
        {
          text: "Ok",
          onPress: () => {
            console.log("Ok btn pressed");
          },
        },
      ]);
      return;
    }
    setTeams([...teams, { id: uuid.v4(), name: teamName, score: 0 }]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Header />
        <TeamAdder data={teams} addHandler={addTeam} />
      </View>
      <View>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "",
    justifyContent: "space-between",
  },
});
