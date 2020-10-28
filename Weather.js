import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = (id) => {
  if (200 <= id && id < 300) {
    return "weather-hail";
  } else {
    return "weather-hurricane";
  }
};

export default function Weather({ temp, id }) {
  return (
    <LinearGradient colors={["#000000", "#ffffff"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name={weatherOptions(id)} color="white" />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text>WOWOWOW</Text>
      </View>
    </LinearGradient>
  );
}

Weather.prototype = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
