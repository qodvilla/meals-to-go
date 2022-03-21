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

  const retrieveLocationData = (location = "Chicago") => {
    // if location filter is an empty string
    setIsLoading(true);
    if (!location.length) {
        setIsLoading(false);
        return;
    
    }
    setKeyword(location);
    setTimeout(() => {
      setIsLoading(true);
      locationRequest(location)
        .then(locationRequestDataTransform)
        .then((data) => {
          setIsLoading(false);
          setLocationData(data);
          console.log("It works");
          console.log(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log("Something went wrong.");
          console.log(err);
        });
    }, 3000);
  };
  return (
    <LocationsContext.Provider
      value={{
        retrieveLocationData,
        isLoading,
        error,
        locationData,
        keyword
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
