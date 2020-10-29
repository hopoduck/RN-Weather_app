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
    id: 0,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    await this.setState({ temp, id: weather[0].id, condition: weather[0].main });
    this.setState({ isLoading: false });
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
    const { isLoading, temp, id, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} id={id} condition={condition} />;
    // return <Loading />;
  }
}
