import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Title } from "./styles";

interface LogoProps {
  title: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const Logo: React.FC<LogoProps> = ({ title, icon }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <MaterialCommunityIcons
        name={icon}
        color={colors.primary}
        size={RFValue(24)}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export { Logo };
