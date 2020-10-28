import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "5ee8e3cd036efc307f533dcee918a02e";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data,
      data: {
        main: { temp, id },
        weather,
      },
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, temp: temp, condition: weather[0].main });
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("찾을수 없습니다.", "슬퍼");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    console.log(temp);
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} id={id} />;
    // return <Loading />;
  }
}
