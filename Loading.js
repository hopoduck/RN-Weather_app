import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Getting Weather......</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDD6AA",
  },
  text: {
    color: "#2C2C2C",
    fontSize: 30,
  },
});
