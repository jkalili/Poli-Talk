//By Adrian Leung
import React from "react";
import { StyleSheet, Text, View } from "react-native";
function Topics({ topic, number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>{topic}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    marginHorizontal: 3,
  },
  topic: {
    fontSize: 15,
    fontStyle: "italic",
    marginHorizontal: 7,
  },
  number: {
    color: "#6e6969",
  },
});
export default Topics;
