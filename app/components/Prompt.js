import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  onPress,
} from "react-native";
import colors from "../config/colors";

function Prompt({ title, subTitle, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>DISAGREE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>NEUTRAL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>AGREE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  subTitle: {
    fontWeight: "300",
    fontSize: 15,
    margin: 7,
    marginTop: 4,
    color: colors.white,
    fontStyle: "italic",
    textAlign: "center",
  },

  title: {
    fontWeight: "700",
    marginTop: 15,
    color: colors.white,
  },

  button: {
    width: "22%",
    height: 35,
    backgroundColor: colors.lightGrey,
    borderRadius: 11,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    marginVertical: 5,
    marginHorizontal: 25,
    flexDirection: "row",
  },

  text: {
    color: colors.darkGrey,
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Prompt;
