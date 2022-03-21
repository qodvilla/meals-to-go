import React, { createContext, useContext, useState } from "react";
import {
  locationRequest,
  locationRequestDataTransform,
} from "./location.service";

export const LocationsContext = createContext();

export const LocationsContextProvider = ({ children }) => {
  const retrieveLocationData = (location = "Chicago") => {
    // if location filter is an empty string
    if (!location.length) {
      return;
    }
    setTimeout(() => {
      locationRequest(location)
        .then(locationRequestDataTransform)
        .then((data) => {
            console.log("It works")
          console.log(data);
        })
        .catch((err) => {
          console.log("Something went wrong.");
          console.log(err);
        });
    }, 3000);
  };
  return (
    <LocationsContext.Provider
      value={{
        retrieveLocationData,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
