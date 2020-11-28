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
import colors from "../config/colors";

function CompassWelcome({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background2.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/LogoGray.png")}
        />
        <Text style={styles.tagline}>POLITICAL COMPASS TEST</Text>
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
        <MaterialIcons name={"info-outline"} size={25} color={"gray"} />
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
    bottom: 140,
  },
  logo: {
    width: 150,
    height: 120,
  },
  logoContainer: {
    position: "absolute",
    top: 250,
    alignItems: "center",
  },
  tagline: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 30,
    textAlign: "center",
    color: colors.darkGrey,
  },
  info: {
    position: "absolute",
    bottom: 40,
    right: 30,
  },
});

export default CompassWelcome;
