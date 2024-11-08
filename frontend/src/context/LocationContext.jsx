import React, { createContext, useState, useEffect } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prevState) => ({ ...prevState, latitude, longitude }));

          // Call the OpenCage API for reverse geocoding
          const api_key = "dbe00f2fd9f94f33a20a692c96eadfa0"; // Replace with your OpenCage API key
          const api_url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;

          fetch(api_url)
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results.length > 0) {
                const city =
                  data.results[0].components.city ||
                  data.results[0].components.town ||
                  data.results[0].components.village;
                setLocation((prevState) => ({ ...prevState, city }));
              } else {
                setError("Unable to fetch city from API.");
              }
            })
            .catch((error) => {
              console.error("Error fetching city name: ", error);
              setError("Unable to fetch city");
            });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            default:
              setError("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <LocationContext.Provider value={{ location, error }}>
      {children}
    </LocationContext.Provider>
  );
};
