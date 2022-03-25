import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

export const restaurantsDataTransform = ({ results = []}) => {
const mappedResults = results.map(restaurant => {
    // returning a new object contain all restaurant information, but adding more.
    
    restaurant.photos = [mockImages[Math.ceil(Math.random() * mockImages.length - 1)]]
    return {
        ...restaurant,
        isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        address: restaurant.vicinity
    }
})
  
  return camelize(mappedResults);
};

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    if (!mocks[location]) {
      reject("Location not found");
    }
    resolve((mocks[location]));
  });
};

