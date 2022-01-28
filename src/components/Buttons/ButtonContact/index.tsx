import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { AntDesign } from "@expo/vector-icons";

import { Container, TextButton } from "./styles";

interface ButtonContactProps extends TouchableOpacityProps {
  icon: React.ComponentProps<typeof AntDesign>["name"];
  textButton: string;
}

const ButtonContact: React.FC<ButtonContactProps> = ({
  icon,
  textButton,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.9} {...rest}>
      <AntDesign color={colors.shape} name={icon} size={RFValue(18)} />

      <TextButton>{textButton}</TextButton>
    </Container>
  );
};

export { ButtonContact };
