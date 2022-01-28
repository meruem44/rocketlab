import React from "react";
import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";
import { ButtonVoid } from "@components/Buttons/ButtonVoid";

import { Container, Header, Title } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

interface CardEditProps {
  title: string;
  onPress?(): void;
}

const CardEdit: React.FC<CardEditProps> = ({ title, onPress, children }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <Title>{title}</Title>

        {onPress && (
          <ButtonVoid onPress={onPress}>
            <Feather name="edit-3" color={colors.shape} size={RFValue(18)} />
          </ButtonVoid>
        )}
      </Header>

      {children}
    </Container>
  );
};

export { CardEdit };
