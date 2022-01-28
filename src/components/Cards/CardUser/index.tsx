import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
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
import { User } from "@dtos/User";

interface CardUserProps {
  data: User;
}

const CardUser: React.FC<CardUserProps> = ({ data }) => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const handleNavigate = useCallback(() => {
    navigate(
      "ProfileUsers" as never,
      {
        userId: data?.id,
      } as never
    );
  }, [data]);

  return (
    <Container onPress={handleNavigate} activeOpacity={0.8}>
      <ContentAvatar>
        {data?.avatar && (
          <Avatar
            resizeMode="contain"
            source={{
              uri: data?.avatar,
            }}
          />
        )}

        {!data?.avatar && (
          <IconAvatar>
            <MaterialIcons
              name="image"
              size={RFValue(20)}
              color={colors.primary}
            />
          </IconAvatar>
        )}
      </ContentAvatar>

      <ContentInfo>
        <Name>{data?.name}</Name>
        {data?.job && <Job>{data?.job}</Job>}
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
