import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  AvatarContainer,
  Avatar,
  ButtonIcon,
  UserName,
} from "./styles";

interface UserInfoProps {
  avatar?: string;
  name: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, avatar }) => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container>
      <AvatarContainer>
        {avatar && (
          <Avatar
            source={{
              uri: avatar,
            }}
          />
        )}

        {!avatar && (
          <Feather
            name="image"
            size={RFValue(28)}
            color={colors.bgExtraLight}
          />
        )}
      </AvatarContainer>

      <ButtonIcon onPress={goBack}>
        <Feather name="arrow-left" size={RFValue(20)} color={colors.shape} />
      </ButtonIcon>

      <UserName>{name}</UserName>
    </Container>
  );
};

export { UserInfo };
