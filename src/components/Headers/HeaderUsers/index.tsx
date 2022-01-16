import React, { useCallback } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

import { ButtonVoid } from "@components/Buttons/ButtonVoid";
import { Logo } from "@components/Logo";

import { Container, ContainerAvatar, Avatar, Content } from "./styles";

const HeaderUsers: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const handleNavigateProfile = useCallback(() => {
    navigate("Profile" as never);
  }, []);

  return (
    <Container>
      <Logo title="Comunidade" icon="account-multiple" />

      <Content>
        <ButtonVoid>
          <MaterialIcons
            name="info"
            size={RFValue(22)}
            color={colors.primary}
          />
        </ButtonVoid>
      </Content>
    </Container>
  );
};

export { HeaderUsers };
