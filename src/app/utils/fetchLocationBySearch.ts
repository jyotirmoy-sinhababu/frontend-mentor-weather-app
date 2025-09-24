'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Location = {
  latitude: number | null;
  longitude: number | null;
};

export const fetchLocationBySearch = (searchedText: string) => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchedText) return;

    const fetchLocation = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            searchedText
          )}&count=1&language=en&format=json`
        );

        if (res.data?.results?.length > 0) {
          const { latitude, longitude } = res.data.results[0];
          setLocation({ latitude, longitude });
        } else {
          setError('No results found');
          setLocation({ latitude: null, longitude: null });
        }
      } catch (err) {
        setError('Failed to fetch location');
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [searchedText]);

  return { ...location, loading, error };
};
