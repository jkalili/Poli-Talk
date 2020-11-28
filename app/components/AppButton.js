//By Cristian Ornelas
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    backgroundColor: colors.lightGrey,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    bottom: 100,
    marginVertical: 10,
  },
  text: {
    color: colors.darkGrey,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AppButton;
