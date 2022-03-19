import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const SearchView = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

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

const RestaurantInfoList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  return (
    <AppContainer>
      <SearchView>
        <Searchbar />
      </SearchView>
      {restaurantContext.isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator animating={true} size="large"color="#2cb67d" />
        </View>
      ) : (
        <RestaurantCardList
          data={restaurantContext.restaurants}
          renderItem={() => {
            return <RestaurantInfoCard />;
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
    justifyContent: "center"
  }
})