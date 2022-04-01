import 'react-native-gesture-handler';
import { ThemeProvider } from "styled-components";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { theme } from "./src/insfrastructure/theme";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationsContextProvider } from "./src/services/locations/locations.context";

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
import { Navigation } from "./src/insfrastructure/navigation";

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

  return (
    <>
    <ThemeProvider theme={theme}>
      <LocationsContextProvider>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </LocationsContextProvider>
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
    </>
  );
}
