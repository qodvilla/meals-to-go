import React from "react";
import styled from "styled-components/native";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const SearchView = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding-top: ${statusBarHeight}px;
`;

const RestaurantInfoList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <AppContainer>
      <SearchView>
        <Searchbar />
      </SearchView>
      <RestaurantInfoList>
        <RestaurantInfoCard />
      </RestaurantInfoList>
    </AppContainer>
  );
};
