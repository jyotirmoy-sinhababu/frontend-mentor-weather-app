import React, {
  useState,
  useContext,
  createContext,
  ReactHTMLElement,
} from 'react';

export const weatherContext = createContext(null);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weatherData, setWeatherData] = useState();
  const [currentLocation, setWeatherLocation] = useState({
    latitude: 52.52,
    longitude: 13.41,
  });

  const getWeatherData = () => {};
  return (
    <weatherContext.Provider value={{}}>{children}</weatherContext.Provider>
  );
};
