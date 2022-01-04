import React from "react";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import { Application } from "./src";

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <Application />;
}
