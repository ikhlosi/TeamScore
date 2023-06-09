import { useState } from "react";
import {
  Alert,
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import TeamAdder from "./src/components/TeamAdder";
import uuid from "react-native-uuid";

export default function App() {
  // Teams
  const [teams, setTeams] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

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

  // Set selected team
  const changeSelection = (teamId) => {
    if (teams.length < 2) {
      setSelectedTeamId(null); // TODO: ask if necessary
      return;
    }
    setSelectedTeamId(teamId);
  };

  const handleIncrement = () => {
    if (!selectedTeamId) {
      Alert.alert("Fout", "Selecteer eerst een team", [
        {
          text: "Ok",
          onPress: () => {
            console.log("Ok btn pressed");
          },
        },
      ]);
      return;
    }
    setTeams(
      teams.map((team) => {
        return team.id === selectedTeamId
          ? { ...team, score: team.score + 1 }
          : team;
      })
    );
    setSelectedTeamId(null);
  };

  const handleCancel = () => {
    setTeams([]);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("Dismiss keyboard");
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TeamAdder
            data={teams}
            addHandler={addTeam}
            changeSelection={changeSelection}
            selectedTeamId={selectedTeamId}
          />
        </View>
        <View style={styles.footer}>
          <Footer
            handleIncrement={handleIncrement}
            handleCancel={handleCancel}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
