import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@contexts/auth";

import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";

const Routes: React.FC = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export { Routes };
