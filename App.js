import { useState } from "react";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import TeamAdder from "./src/components/TeamAdder";
import uuid from "react-native-uuid";

export default function App() {
  // Teams
  const [teams, setTeams] = useState([
    // { id: uuid.v4(), name: "BeatUp", score: score1 },
    // { id: uuid.v4(), name: "Justified", score: score2 },
  ]);

  // Team adder
  const addTeam = (teamName) => {
    if (teams.length >= 2) {
      return;
    }
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
    if (
      teams.length != 0 &&
      teams[0].name.toLowerCase() === teamName.toLowerCase()
    ) {
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
    // setTeams([...teams, { id: uuid.v4(), name: teamName, score: 0 }]);
    setTeams([
      ...teams.map((team) => {
        return {
          score: 0,
          ...team,
        };
      }),
      { id: uuid.v4(), name: teamName, score: 0 },
    ]);
  };

  // Update score
  const updateScore = (teamName) => {
    setTeams(
      teams.map((team) => {
        if (team.name === teamName) {
          return {
            score: team.score++,
            ...team,
          };
        } else {
          return team;
        }
      })
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TeamAdder data={teams} addHandler={addTeam} />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    position: "relative",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
