import React, { useContext, useState, useEffect } from "react";
import { LocationsContext } from "../../../services/locations/locations.context";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchView = styled.View`
  margin: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, retrieveLocationData } = useContext(LocationsContext);
  const [location, setLocation] = useState(keyword); //setting the default location.
  
  useEffect(() => {
      setLocation(keyword);
  }, [keyword])
  
  return (
    <SearchView>
      <Searchbar
        placeholder="Search for location"
        value={location}
        icon="map"
        onChangeText={(text) => setLocation(text)}
        onSubmitEditing={() => {
          retrieveLocationData(location);
        }}
      />
    </SearchView>
  );
};
