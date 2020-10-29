import React from "react";
import { View, Text, StyleSheet, StatusBar, Alert, Button } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

const weatherOptions = (id, condition) => {
  if (200 <= id && id < 300) {
    return { icon: "weather-lightning-rainy", colors: ["#373B44", "#4286f4"], title: condition, subtitle: "" };
  } else if (id >= 300 && id < 400) {
    return { icon: "weather-pouring", colors: ["#89F7FE", "#66A6FF"], title: condition, subtitle: "" };
  } else if (id >= 500 && id < 600) {
    return { icon: "weather-rainy", colors: ["#00C6FB", "#005BEA"], title: condition, subtitle: "" };
  } else if (id >= 600 && id < 700) {
    return { icon: "weather-snowy", colors: ["#7DE2FC", "#B9B6E5"], title: condition, subtitle: "" };
  } else if (id >= 700 && id < 800) {
    return { icon: "weather-fog", colors: ["#89F7FE", "#66A6FF"], title: condition, subtitle: "Just don't go outside" };
  } else if (id === 800) {
    return { icon: "weather-sunny", colors: ["#FF7300", "#FEF253"], title: condition, subtitle: "Good weather" };
  } else if (id > 800) {
    return { icon: "weather-cloudy", colors: ["#D7D2CC", "#304352"], title: condition, subtitle: "" };
  } else {
    return null;
  }
};

export default function Weather({ temp, id, condition }) {
  const options = weatherOptions(id, condition);
  return (
    <LinearGradient colors={options.colors} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name={options.icon} color="white" />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.textContainer }}>
        <Text style={styles.title}>{options.title}</Text>
        <Text style={styles.subtitle}>{options.subtitle}</Text>
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
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 40,
    alignItems: "stretch",
    justifyContent: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
    textAlign: "left",
  },
  title: {
    color: "white",
    fontSize: 45,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    textAlign: "left",
    fontWeight: "600",
  },
});
