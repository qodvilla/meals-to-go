import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  restaurantsDataTransform,
} from "./restaurants.service";

export const RestaurantContext = createContext(); //creates a global Context

export const RestaurantContextProvider = ({ children }) => {
  // this will wrap components, thus providing them a certain state.

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
      setIsLoading(true);
      setTimeout(() => {
        restaurantsRequest()
        .then(restaurantsDataTransform)
        .then(response => {
            setIsLoading(false);
            setRestaurants(response);
        })
        .catch(err => {
            setIsLoading(false);
            setError("Error Fetching Data");
        })
      },2000)
  }

  useEffect(() => {
      retrieveRestaurants();
  }, []) //only run this effect when the component mounts.
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
