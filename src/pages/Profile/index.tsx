import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@contexts/auth";

import { Feather } from "@expo/vector-icons";

import { UserInfo } from "./components/UserInfo";
import { UserContact } from "./components/UserContact";

import { Container, Title, Header, Scroll } from "./styles";
import { ButtonVoid } from "@components/Buttons/ButtonVoid";

const Profile: React.FC = () => {
  const { colors } = useTheme();
  const { signOut } = useAuth();
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header>
        <ButtonVoid onPress={goBack}>
          <Feather name="arrow-left" size={RFValue(22)} color={colors.text} />
        </ButtonVoid>

        <Title>Meu perfil</Title>

        <ButtonVoid onPress={signOut}>
          <Feather name="power" size={RFValue(22)} color={colors.text} />
        </ButtonVoid>
      </Header>

      <Scroll showsVerticalScrollIndicator={false}>
        <UserInfo />
        <UserContact />
      </Scroll>
    </Container>
  );
};

export { Profile };
