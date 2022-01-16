import React, { useCallback } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

import { ButtonVoid } from "@components/Buttons/ButtonVoid";
import { Logo } from "@components/Logo";

import { Container, ContainerAvatar, Avatar, Content } from "./styles";

const HeaderLib: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const handleNavigateProfile = useCallback(() => {
    navigate("Profile" as never);
  }, []);

  return (
    <Container>
      <Logo title="Rocketlab" icon="book-minus-multiple" />

      <Content>
        <ButtonVoid>
          <MaterialIcons
            name="circle-notifications"
            size={RFValue(30)}
            color={colors.primary}
          />
        </ButtonVoid>
        <ContainerAvatar onPress={handleNavigateProfile} activeOpacity={0.8}>
          <Avatar
            resizeMode="cover"
            source={{
              uri: "https://avatars.githubusercontent.com/u/48477073?v=4",
            }}
          />
        </ContainerAvatar>
      </Content>
    </Container>
  );
};

export { HeaderLib };
