'use client';
import { WeatherProvider } from './weatherForcast/WeatherContext';

import { fetchWeatherData } from './utils/fetchWeatherData';
import Navbar from '@/components/Navbar';

export default function Home() {
  fetchWeatherData(28.6, 77.2, 'metric');

  return (
    <WeatherProvider>
      <div className=''>
        <Navbar />
      </div>
    </WeatherProvider>
  );
}
