'use client';
import { WeatherProvider } from './weatherForcast/WeatherContext';

// import { fetchWeatherData } from './utils/fetchWeatherData';
import Navbar from '@/components/Navbar';
import { useContext } from 'react';
import { weatherContext } from './weatherForcast/WeatherContext';

export default function Home() {
  // fetchWeatherData(28.6, 77.2, 'metric');
  const { weatherData } = useContext(weatherContext);
  console.log(weatherData);

  return (
    <WeatherProvider>
      <div className=''>
        <Navbar />
      </div>
    </WeatherProvider>
  );
}
