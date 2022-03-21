import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants-screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/insfrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";

import {
  useFonts as useArimoFonts,
  Arimo_400Regular,
} from "@expo-google-fonts/arimo";

import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import {
  useFonts as usePoppinsFonts,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { LocationsContextProvider } from "./src/services/locations/locations.context";

export default function App() {
  const [fontArimoLoaded] = useArimoFonts({
    Arimo_400Regular,
  });

  const [fontPoppinsLoaded] = usePoppinsFonts({
    Poppins_400Regular,
  });

  const [fontLatoLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!fontArimoLoaded || !fontLatoLoaded || !fontPoppinsLoaded) {
    return null;
  }

  function RestaurantScreen() {
    return <RestaurantsScreen />;
  }

  function MapScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>O! Our Map Screen Here!</Text>
        <Ionicons name="fast-food-sharp" size={24} color="black" />
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>O! Our Settings Screen Here!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <LocationsContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Restaurants") {
                    iconName = focused ? "ios-fast-food" : "ios-fast-food";
                  } else if (route.name === "Map") {
                    iconName = focused ? "ios-map" : "ios-map";
                  } else if (route.name === "Settings") {
                    iconName = "ios-list";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#ff8906",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationsContextProvider>
    </ThemeProvider>
  );
}
