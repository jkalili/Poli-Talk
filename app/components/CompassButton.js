import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

function CompassButton({ title, onPress, color }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    //width: "22%",
    height: 35,
    backgroundColor: colors.white,
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
    color: colors.black,
    fontSize: 13,
    //fontWeight: 'bold',
  },
});

export default CompassButton;
