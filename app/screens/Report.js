import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity,
  TextInput,
} from "react-native";

import colors from "../config/colors";

//report screen done by Jason
function Report({ navigation }) {
  const [isSwitchEnabledHateSpeech, setSwitchHateSpeech] = React.useState(
    false
  );
  const [isSwitchEnabledNudity, setSwitchNudity] = React.useState(false);
  const [isSwitchEnabledViolence, setSwitchViolence] = React.useState(false);
  const [isSwitchEnabledHarassment, setSwitchHarassment] = React.useState(
    false
  );

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background2.jpg")}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.text}>REPORT USER</Text>
      </View>

      <View style={styles.reportOption}>
        <Text>Hate Speech</Text>
        <Switch
          value={isSwitchEnabledHateSpeech}
          onValueChange={(value) => setSwitchHateSpeech(value)}
        />

        <Text>Nudity or Sexual Content</Text>
        <Switch
          style={styles.switch}
          value={isSwitchEnabledNudity}
          onValueChange={(value) => setSwitchNudity(value)}
        />

        <Text>Violence</Text>
        <Switch
          style={styles.switch}
          value={isSwitchEnabledViolence}
          onValueChange={(value) => setSwitchViolence(value)}
        />

        <Text>Harassment</Text>
        <Switch
          style={styles.switch}
          value={isSwitchEnabledHarassment}
          onValueChange={(value) => setSwitchHarassment(value)}
        />
      </View>
      <TextInput
        style={styles.textBox}
        placeholder="enter what happened here"
        placeholderTextColor="#d3d3d3"
      ></TextInput>

      <TouchableOpacity
        style={styles.sumbitButton}
        onPress={() => navigation.navigate("MenuScreen")}
      >
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/LogoGray.png")}
        />
        <Text style={styles.textLogo}>POLITALK 2020©</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headerContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  text: {
    padding: 15,
    fontSize: 30,
    fontWeight: "bold",
  },

  reportOption: {
    position: "absolute",
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    height: 450,
    width: "90%",
    top: 250,
    alignItems: "center",
    //justifyContent: "center",
    padding: 40,
  },

  textBox: {
    position: "absolute",
    backgroundColor: colors.white,
    borderRadius: 15,
    height: 60,
    width: "75%",
    padding: 8,
    bottom: 325,
  },

  sumbitButton: {
    position: "absolute",
    bottom: 250,
    width: "40%",
    height: 50,
    marginTop: 20,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  logo: {
    width: 80,
    height: 60,
  },

  textLogo: {
    padding: 15,
    fontSize: 14,
    fontWeight: "bold",
  },

  logoContainer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
  },
});

export default Report;
