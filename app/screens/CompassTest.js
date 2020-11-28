import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import colors from "../config/colors";

import Prompt from "../components/Prompt";

function CompassTest({ navigation }) {
  return (
    <ImageBackground
      blurRadius={7}
      style={styles.background}
      source={require("../assets/compassBackground.jpg")}
    >
      <View style={styles.logoIcon}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/LogoGray.png")}
        />
      </View>

      <TouchableOpacity
        style={styles.profileIcon}
        onPress={() => {
          Alert.alert(
            "Exit Compass Test",
            "Do you really want to exit? Your progress will not be saved.",
            [
              { text: "No" },
              {
                text: "Yes",
                onPress: () => navigation.navigate("MenuScreen"),
              },
            ]
          );
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/cristianprofile.jpg")}
        />
      </TouchableOpacity>

      <View style={styles.forum}>
        <Prompt
          title="Question 1:"
          subTitle="If economic globalisation is inevitable, it should primarily serve humanity rather than the interests of trans-national corporations."
        />
        <Prompt
          title="Question 2:"
          subTitle="I’d always support my country, whether it was right or wrong."
        />
        <Prompt
          title="Question 3:"
          subTitle="No one chooses their country of birth, so it’s foolish to be proud of it."
        />
        <Prompt
          title="Question 4:"
          subTitle="Our race has many superior qualities, compared with other races."
        />
      </View>

      <TouchableOpacity
        style={styles.submitContainer}
        onPress={() => navigation.navigate("CTscore")}
      >
        <Text style={styles.submit}>SUBMIT</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 10,
    width: "55%",
    justifyContent: "center",
    flexDirection: "row",
  },
  forum: {
    position: "absolute",
    borderRadius: 35,
    backgroundColor: colors.darkGrey,
    margin: 10,
    height: "75%",
    width: "95%",
    top: "13%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  logoIcon: {
    position: "absolute",
    top: "5%",
    left: 20,
  },
  profileIcon: {
    position: "absolute",
    top: "5%",
    right: 20,
  },
  submitContainer: {
    margin: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "90%",
    height: 50,
    bottom: 110,
    backgroundColor: colors.lightGrey,
  },
  submit: {
    textAlign: "center",
    color: colors.darkGrey,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CompassTest;
