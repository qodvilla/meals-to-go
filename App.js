import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/insfrastructure/theme';


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
} from "@expo-google-fonts/poppins"


export default function App() {
  const [fontArimoLoaded] = useArimoFonts({
    Arimo_400Regular,
  });

  const [fontPoppinsLoaded] = usePoppinsFonts({
    Poppins_400Regular
  });

  const [fontLatoLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!fontArimoLoaded || !fontLatoLoaded || !fontPoppinsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
