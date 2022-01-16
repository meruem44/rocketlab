import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import { RocketLib } from "@pages/RocketLib";
import { Users } from "@pages/Users";

const { Navigator, Screen } = createBottomTabNavigator();

const TabBarRoutes: React.FC = () => {
  const { colors, metrics, fonts } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.description,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height:
            Platform.OS === "ios"
              ? RFValue(45 + metrics.marginBottom)
              : RFValue(60),
          paddingHorizontal: RFValue(5),
          paddingTop: RFValue(5),
          paddingBottom:
            Platform.OS === "android" ? RFValue(6) : metrics.marginBottom,
          backgroundColor: colors.bgExtraLight,
          borderTopWidth: 0,
        },

        tabBarItemStyle: {},
        tabBarLabelStyle: {
          fontSize: RFValue(16),
          fontFamily: fonts.primary700,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Screen
        name="RocketLib"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons color={color} size={RFValue(20)} name="menu-book" />
          ),
          tabBarLabel: "Rocketlib",
        }}
        component={RocketLib}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome color={color} size={RFValue(20)} name="users" />
          ),
          tabBarLabel: "Comunidade",
        }}
        name="Users"
        component={Users}
      />
    </Navigator>
  );
};
export { TabBarRoutes };
