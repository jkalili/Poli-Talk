import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";

function News({ title, subTitle, date, publisher }) {
  return (
    <View
      style={styles.container}
      onPress={() => Linking.openURL("http://google.com")}
    >
      <Text
        style={styles.title}
        onPress={() => Linking.openURL("http://google.com")}
      >
        {title}
      </Text>
      <Text
        style={styles.date}
        onPress={() => Linking.openURL("http://google.com")}
      >
        {publisher} {date}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    color: "#6e6969",
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});
export default News;
