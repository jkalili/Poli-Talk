//By Cristian Ornelas & Jason Kalili
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import AppButton from "../components/AppButton";
import { MaterialIcons } from "@expo/vector-icons";

function CompassWelcome({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}>POLITICAL COMPASS TEST</Text>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/LogoGray.png")}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="BEGIN"
          onPress={() => {
            Alert.alert(
              "Notice",
              "Please respond honestly and only choose one answer for each question. You may take this evaluation again at any time. Thanks for using PoliTalk.",
              [
                { text: "Cancel" },
                {
                  text: "Begin",
                  onPress: () => navigation.navigate("CompassTest"),
                },
              ]
            );
          }}
        />
        <AppButton
          title="BACK"
          onPress={() => navigation.navigate("MenuScreen")}
        />
      </View>
      <TouchableOpacity
        style={styles.info}
        onPress={() =>
          alert(
            "Contrary to the name, this is not a real test - nor a quiz. This is simply a way to gauge where you personally stand on the political spectrum. This information will not be accessible to anyone."
          )
        }
      >
        <MaterialIcons name={"info-outline"} size={25} color={"white"} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 5,
    width: "65%",
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 120,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 30,
    textAlign: "center",
  },
  info: {
    position: "absolute",
    bottom: 30,
    right: 20,
  },
});

export default CompassWelcome;
