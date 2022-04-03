import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding-top: ${statusBarHeight}px;
`;

const RestaurantCardList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;


export const RestaurantsScreen = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantContext);
  return (
    <AppContainer>
      <Search />
      {restaurantContext.isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator animating={true} size="large" color="#2cb67d" />
        </View>
      ) : (
        <RestaurantCardList
          data={restaurantContext.restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {navigation.navigate("RestaurantDetails", {restaurant: item})}}>
                <RestaurantInfoCard restaurant={item}/>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
