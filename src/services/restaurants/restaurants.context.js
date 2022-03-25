import React, { useState, createContext, useEffect, useContext } from "react";
import {
  restaurantsRequest,
  restaurantsDataTransform,
} from "./restaurants.service";
import { LocationsContext } from "../locations/locations.context";

export const RestaurantContext = createContext(); //creates a global Context

export const RestaurantContextProvider = ({ children }) => {
  // this will wrap components, thus providing them a certain state.
  console.log("Rendering Restaurants Context")
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { locationData } = useContext(LocationsContext);

  const retrieveRestaurants = (loc) => {
      setIsLoading(true);
      setRestaurants([]);
      setTimeout(() => {
        restaurantsRequest(loc)
        .then(restaurantsDataTransform)
        .then(response => {
            setIsLoading(false);
            setRestaurants(response);
        })
        .catch(err => {
            setIsLoading(false);
            setError("Error Fetching Data");
            console.log("Something went wrong, more info: ",err)
        })
      },2000)
  }

  useEffect(() => {
      retrieveRestaurants(locationData);
  }, [locationData]) //only run this effect when the component mounts.

  return (
    <RestaurantContext.Provider
      value={{
        restaurants: restaurants,
        isLoading: isLoading,
        error: error
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
