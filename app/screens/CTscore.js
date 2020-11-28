//By Cristian Ornelas
import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function CTscore({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View style={styles.forum}>
        <Text style={styles.title}>Political Compass Test</Text>
        <View>
          <Text style={styles.scoreHeader}>RESULTS:</Text>
          <Text style={styles.score}>46</Text>
          <Text style={styles.explanation}>
            This means that have a moderate political standing, but lean
            slightly left
          </Text>
        </View>

        <TouchableOpacity
          style={styles.scoreButton}
          onPress={() => navigation.navigate("MenuScreen")}
        >
          <Text style={styles.finish}>FINISH</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  finish: {
    color: colors.black,
    position: "relative",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  forum: {
    alignSelf: "center",
    position: "absolute",
    borderRadius: 35,
    backgroundColor: colors.white,
    margin: 10,
    height: "45%",
    width: "70%",
    top: "25%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  score: {
    alignSelf: "center",
    fontSize: 50,
    marginVertical: 2,
    color: "#708090",
  },
  explanation: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 18,
    color: colors.darkGrey,
    top: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  scoreButton: {
    position: "relative",
    alignSelf: "center",
    justifyContent: "center",
    top: 80,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    height: "15%",
    width: "80%",
  },
  scoreHeader: {
    alignSelf: "center",
    fontSize: 18,
    marginVertical: 14,
    color: colors.darkGrey,
  },
  title: {
    alignSelf: "center",
    top: 10,
    fontSize: 20,
    marginBottom: 15,
    marginVertical: 14,
    color: colors.darkGrey,
  },
});

export default CTscore;
