import React from "react";
import { Text } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantMenuCard } from "../components/restaurant-menu-card.component";

export const RestaurantDetails = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantMenuCard />
    </>
  );
};


