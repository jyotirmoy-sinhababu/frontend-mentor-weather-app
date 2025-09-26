'use client';
import axios from 'axios';

export type UnitSystem = 'metric' | 'imperial';
export type UnitOverrides = {
  temperature?: 'celsius' | 'fahrenheit';
  windSpeed?: 'kmh' | 'ms' | 'mph' | 'kn';
  precipitation?: 'mm' | 'inch';
};

export const fetchWeatherData = async (
  latitude: number,
  longitude: number,
  system: UnitSystem = 'metric',
  overrides: UnitOverrides = {}
) => {
  try {
    let defaults: UnitOverrides =
      system === 'metric'
        ? { temperature: 'celsius', windSpeed: 'kmh', precipitation: 'mm' }
        : {
            temperature: 'fahrenheit',
            windSpeed: 'mph',
            precipitation: 'inch',
          };

    const units: UnitOverrides = { ...defaults, ...overrides };

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&timezone=auto&temperature_unit=${units.temperature}&wind_speed_unit=${units.windSpeed}&precipitation_unit=${units.precipitation}`;

    const weatherData: any = await axios.get(url).then((res) => {
      console.log(res.data);
      const hourlyData = res.data.hourly.time.map((t: string, i: number) => ({
        time: t,
        temperature: res.data.hourly.temperature_2m[i],
        weatherCode: res.data.hourly.weather_code[i],
      }));

      console.log(hourlyData[0]);
      return res;
    });
    return weatherData;
  } catch (error) {
    console.log(error, 'trouble fetching weather data');
  }
};
