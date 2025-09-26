import React, {
  useState,
  useEffect,
  createContext,
  ReactHTMLElement,
} from 'react';
import { fetchWeatherData } from '../utils/fetchWeatherData';
import { fetchLocationBySearch } from '../utils/fetchLocationBySearch';

export const weatherContext = createContext<any>([]);

type LatLng = { lat: number; lng: number };

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weatherData, setWeatherData] = useState<any>();
  const [currentLocation, setWeatherLocation] = useState({
    latitude: 52.52,
    longitude: 13.41,
  });
  const [geoLocation, setGeoLocation] = useState<LatLng>({
    lat: 52.52,
    lng: 13.41,
  });
  const [error, setError] = useState<string | null>(null);
  console.log(geoLocation);
  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setError('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => setError(`${err.code}: ${err.message}`),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);
  useEffect(() => {
    const getWeatherForecast = async () => {
      try {
        if (geoLocation?.lat !== null && geoLocation?.lng !== null) {
          const weatherApiData = await fetchWeatherData(
            geoLocation.lat,
            geoLocation.lng
          );
          setWeatherData(weatherApiData.hourly);
        }
      } catch (error) {}
    };
    getWeatherForecast();
  }, [geoLocation]);

  return (
    <weatherContext.Provider value={{ weatherData }}>
      {children}
    </weatherContext.Provider>
  );
};
