import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { theme } from "@styles/theme";

import { SignIn } from "@pages/SignIn";
import { RocketLib } from "@pages/RocketLib";
import { SignUp } from "@pages/SignUp";

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.bg}
      />
      <SignUp />
    </ThemeProvider>
  );
};

export { Application };
