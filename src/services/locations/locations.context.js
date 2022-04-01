import React, { createContext, useContext, useState, useEffect } from "react";
import {
  locationRequest,
  locationRequestDataTransform,
} from "./location.service";

export const LocationsContext = createContext();

export const LocationsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  const retrieveLocationData = (location) => {
    // if location filter is an empty string
    setIsLoading(true);
    setKeyword(location);
  };

  useEffect(() => {
    console.log("Running useEffect for: Component Did Mount!")
    if (!keyword.length) {
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(true);
      locationRequest(keyword)
        .then(locationRequestDataTransform)
        .then((data) => {
          setIsLoading(false);
          setLocationData(data); //we get this after search submit.
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    });
  }, [keyword]);

  return (
    <LocationsContext.Provider
      value={{
        retrieveLocationData,
        isLoading,
        error,
        locationData,
        keyword,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
