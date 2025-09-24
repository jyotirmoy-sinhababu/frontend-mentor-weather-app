'use client';
import axios from 'axios';

export type Units = {
  temperature: string;
  windSpeed: string;
  precipitation: string;
};

export const useFetchWeatherData = async (
  latitude: number,
  longitude: number,
  unit: Units
) => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&timezone=auto&temperature_unit=${temperatureUnit}&wind_speed_unit=${windSpeedUnit}&precipitation_unit=${precipitationUnit}`;

    const weatherData = await axios.get(url).then((res) => {
      return res;
    });
    return weatherData;
  } catch (error) {
    console.log(error, 'trouble fetching weather data');
  }
};

export default useFetchWeatherData;
