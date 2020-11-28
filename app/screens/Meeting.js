import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

//meeting screen done by Jason
function Meeting({ navigation }) {
  //for keyboard
  const [chatMessage, setMessage] = useState("");
  //for prompt
  const [prompt, setPrompt] = useState("Abortion");

  const [micColor, setMicColor] = useState("#2f2f2f");
  const [micStatus, setMicStatus] = useState("microphone");

  const [camColor, setCamColor] = useState("#2f2f2f");
  const [camStatus, setCamStatus] = useState("camera");

  return (
    <View style={styles.backColor}>
      <View>
        <ImageBackground
          style={styles.image}
          source={require("../assets/cameron.png")}
        >
          <Image style={styles.pip} source={require("../assets/pip.jpg")} />
        </ImageBackground>
      </View>

      <View style={styles.toolbar}>
        {/* Added onPress to both TouchableOpacity and MaterialIcon because adding it on only materialIcons would not work on mobile, and the opposite would not work when running in web browser*/}
        <TouchableOpacity
          style={styles.mute}
          onPress={() =>
            setMicColor("#c80815") & setMicStatus("microphone-off")
          }
        >
          <MaterialCommunityIcons
            name={micStatus}
            color={micColor}
            size={30}
            onPress={() =>
              setMicColor("#c80815") & setMicStatus("microphone-off")
            }
          ></MaterialCommunityIcons>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.camera}
          onPress={() =>
            setCamColor("#c80815") &
            setCamStatus("camera-off") &
            alert("Action Not Yet Implemented")
          }
        >
          <MaterialCommunityIcons
            name={camStatus}
            color={camColor}
            size={30}
            onPress={() =>
              setCamColor("#c80815") &
              setCamStatus("camera-off") &
              alert("Action Not Yet Implemented")
            }
          ></MaterialCommunityIcons>
        </TouchableOpacity>

        {/* Added onPress to both TouchableOpacity and MaterialIcon because adding it on only materialIcons would not work on mobile, and the opposite would not work when running in web browser*/}
        <TouchableOpacity
          style={styles.settings}
          onPress={() => navigation.navigate("ComingSoon")}
        >
          <MaterialIcons
            name="settings"
            color={colors.darkGrey}
            size={30}
            onPress={() => navigation.navigate("ComingSoon")}
          ></MaterialIcons>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.report}
          onPress={() => navigation.navigate("Report")}
        >
          <MaterialIcons
            name="report"
            color={colors.darkGrey}
            size={30}
            onPress={() => navigation.navigate("Report")}
          ></MaterialIcons>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.endCall}
          onPress={() => navigation.navigate("PostConversation")}
        >
          <MaterialCommunityIcons
            name="close"
            color={colors.darkGrey}
            size={30}
            onPress={() => navigation.navigate("PostConversation")}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>

      <View style={styles.prompt}>
        <TouchableOpacity
          style={styles.next}
          onPress={() => setPrompt("Same Sex Marriage")}
        >
          <MaterialIcons
            name="navigate-next"
            color={colors.darkGrey}
            size={35}
            onPress={() => setPrompt("Same Sex Marriage")}
          ></MaterialIcons>
        </TouchableOpacity>
        {/* Added onPress to both TouchableOpacity and MaterialIcon because adding it on only materialIcons would not work on mobile, and the opposite would not work when running in web browser*/}
        <TouchableOpacity
          style={styles.before}
          onPress={() => setPrompt("Abortion")}
        >
          <MaterialIcons
            name="navigate-before"
            color={colors.darkGrey}
            size={35}
            onPress={() => setPrompt("Abortion")}
          ></MaterialIcons>
        </TouchableOpacity>
        {/* changeable text component */}
        <Text style={styles.promptText}>{prompt}</Text>
      </View>

      <View style={styles.chat}>
        <Text style={styles.chatText0}>Me: Thanks for sharing!</Text>
        <Text style={styles.chatText1}>Cameron: Of Course!</Text>
        <Text style={styles.chatTextDynamic}>Me: {chatMessage}</Text>
        <View style={styles.keyboard}>
          <TextInput
            style={styles.input}
            placeholder="enter message"
            placeholderTextColor="rgba(255,255,255,0.7)"
            onChangeText={(val) => setMessage(val)} //functional keyboard
          />
          <TouchableOpacity
            style={styles.sendIcon}
            onPress={() => setMessage("Example message sent...")}
          >
            <MaterialCommunityIcons
              name="send"
              color={colors.lightGrey}
              size={20}
              onPress={() => setMessage("Example message sent...")}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    width: "100%",
    height: 350,
  },

  backColor: {
    backgroundColor: colors.primary,
    height: "100%",
    width: "100%",
  },

  toolbar: {
    width: "100%",
    height: 50,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  chat: {
    width: "100%",
    height: 430,
    backgroundColor: colors.primary,
    alignItems: "center",
  },

  prompt: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
    borderColor: colors.primary,
    borderWidth: 5,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  chatText0: {
    color: colors.white,
    position: "absolute",
    alignSelf: "baseline",
    margin: 10,
  },

  chatText1: {
    color: colors.white,
    position: "absolute",
    alignSelf: "baseline",
    margin: 10,
    top: 25,
  },

  chatTextDynamic: {
    color: colors.white,
    position: "absolute",
    alignSelf: "baseline",
    margin: 10,
    top: 50,
  },

  keyboard: {
    width: "90%",
    height: 35,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    position: "absolute",
    bottom: 30,
  },

  input: {
    color: colors.lightGrey,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    top: 8,
    width: "90%",
  },

  sendIcon: {
    alignSelf: "flex-end",
    right: 10,
    bottom: 8,
  },

  pip: {
    height: 120,
    width: 90,
    position: "absolute",
    alignSelf: "flex-end",
    margin: 20,
    right: 0,
    borderRadius: 15,
    top: 25,
  },

  promptText: {
    fontSize: 20,
    color: colors.darkGrey,
  },

  next: {
    position: "absolute",
    top: -15,
    margin: 10,
    left: 120,
  },

  before: {
    position: "absolute",
    margin: 10,
    right: 120,
    top: -15,
  },
});

export default Meeting;
