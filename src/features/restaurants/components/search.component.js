import React, { useContext, useState, useEffect } from "react";
import { LocationsContext } from "../../../services/locations/locations.context";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchView = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, retrieveLocationData } = useContext(LocationsContext);
  const [location, setLocation] = useState(keyword); //setting the default location.

  return (
    <SearchView>
      <Searchbar
        placeholder="Search for location"
        value={location}
        onChangeText={(text) => setLocation(text)}
        onSubmitEditing={() => {
          retrieveLocationData(location);
        }}
      />
    </SearchView>
  );
};
