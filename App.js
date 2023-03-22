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
  // const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  // const renderItem = ({ item }) => (
  //   <TouchableOpacity
  //     onPress={() => handleTeamPress(item)}
  //     style={{
  //       backgroundColor: item.isSelected ? "orange" : "white",
  //       padding: 10,
  //     }}
  //   >
  //     <View>
  //       <Text>{item.title}</Text>
  //       <Text>Score: {item.score}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );

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
  const updateScore = (team) => {
    setTeams(
      teams.map((entry) => {
        if (entry.id === team.id) {
          return {
            score: entry.score + 1,
            ...entry,
          };
        } else {
          return entry;
        }
      })
    );
  };

  // Set selected team
  // const handleTeamPress = (team) => {
  //   if (selectedTeam && selectedTeam.id === team.id) {
  //     // If the selected item is pressed again, reset the selected item
  //     setSelectedTeam(null);
  //   } else {
  //     // Set the new selected item and reset the previous one
  //     setSelectedTeam(team);
  //     if (selectedTeam) {
  //       setSelectedTeam((prevTeam) => ({ ...prevTeam, isSelected: false }));
  //     }
  //     setSelectedTeam((prevTeam) => ({ ...prevTeam, isSelected: true }));
  //   }
  // };

  // Set selected team
  const changeSelection = (teamId) => {
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
        <Footer handleIncrement={handleIncrement} handleCancel={handleCancel} />
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
