//By Cristian Ornelas & Jason Kalili(slider)

import React from "react";
import Slider from "@react-native-community/slider";

import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function Prompt({ title, subTitle, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={{ flexDirection: "row" }}>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          maximumTrackTintColor="tomato"
          minimumTrackTintColor="dodgerblue"
        />
      </View>
      <View style={styles.markerContainer}>
        <Text style={styles.marker}>DISAGREE</Text>
        <Text style={styles.marker}>NOT SURE</Text>
        <Text style={styles.marker}>AGREE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  markerContainer: {
    width: "120%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  marker: {
    color: colors.secondary,
  },

  container: {
    alignItems: "center",
  },

  subTitle: {
    fontWeight: "300",
    fontSize: 15,
    margin: 7,
    marginTop: 4,
    color: colors.lightGrey,
    fontStyle: "italic",
    textAlign: "center",
  },

  title: {
    fontWeight: "700",
    marginTop: 15,
    color: colors.lightGrey,
  },

  text: {
    color: colors.darkGrey,
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Prompt;
