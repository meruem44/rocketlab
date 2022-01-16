import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { TabBarRoutes } from "./tab.routes";
import { Profile } from "@pages/Profile";

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TabBarRoutes"
    >
      <Screen name="TabBarRoutes" component={TabBarRoutes} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export { AppRoutes };
