import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { SignRoutes } from "./sign.routes";

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignRoutes"
    >
      <Screen name="SignRoutes" component={SignRoutes} />
    </Navigator>
  );
};

export { AuthRoutes };
