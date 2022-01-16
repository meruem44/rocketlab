import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { NativeBaseProvider } from "native-base";

import { theme } from "@styles/theme";
import { ContextProvider } from "@contexts/index";

import { Routes } from "./routes";

const Application: React.FC = () => {
  return (
    <ContextProvider>
      <NativeBaseProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor={theme.colors.bg}
          />

          <Routes />
        </ThemeProvider>
      </NativeBaseProvider>
    </ContextProvider>
  );
};

export { Application };
