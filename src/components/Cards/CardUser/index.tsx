import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  ContentAvatar,
  Avatar,
  ContentInfo,
  Name,
  Job,
  Status,
  IconAvatar,
} from "./styles";

const CardUser: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.8}>
      <ContentAvatar>
        <Avatar
          resizeMode="contain"
          source={{
            uri: "https://avatars.githubusercontent.com/u/48477073?v=4",
          }}
        />

        <IconAvatar>
          <MaterialIcons
            name="image"
            size={RFValue(20)}
            color={colors.primary}
          />
        </IconAvatar>
      </ContentAvatar>

      <ContentInfo>
        <Name>Paulo Leandro de Sousa</Name>
        <Job>Desenvolvedor React-Native</Job>
      </ContentInfo>

      <MaterialIcons
        name="chevron-right"
        size={RFValue(20)}
        color={colors.text}
      />
    </Container>
  );
};

export { CardUser };
