import camelize from "camelize";
import { locations } from "./locations.mock";

export const locationRequest = (location = "San Francisco") => {
  const mockLocation = locations[location.toLowerCase()];
  return new Promise((resolve, reject) => {
    if (!mockLocation) {
      reject("Location Not Found");
    }
    resolve(mockLocation);
  });
};

export const locationRequestDataTransform = (data) => {
  // Responsible for transforming and extracting the data we need.
  const transformedData = camelize(data);
  const { results } = transformedData;
  const locationInfo = results[0];
  const { geometry } = locationInfo;
  const { location } = geometry;
  const { lat, lng } = location;
  return `${lat},${lng}`;
};


// The context should be doing this: TODO: Remove this commented out code.
// locationRequest().then(locationRequestDataTransform).then(console.log);
