import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Feather } from "@expo/vector-icons";

import { ButtonPrimary } from "@components/Buttons/ButtonPrimary";
import { Input } from "@components/Form/Input";

import {
  Container,
  Title,
  Header,
  AvatarContainer,
  Avatar,
  ButtonIcon,
  UserInfoContent,
  Content,
  PasswordContent,
  Scroll,
} from "./styles";

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email("E-mail inválido"),
});

const Profile: React.FC = () => {
  const { colors } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Header>
        <Feather name="arrow-left" size={RFValue(22)} color={colors.text} />

        <Title>Meu perfil</Title>

        <Feather name="power" size={RFValue(22)} color={colors.text} />
      </Header>

      <Scroll showsVerticalScrollIndicator={false}>
        <AvatarContainer>
          <Avatar
            source={{
              uri: "https://avatars.githubusercontent.com/u/48477073?v=4",
            }}
          />
          <ButtonIcon>
            <Feather name="camera" size={RFValue(20)} color={colors.shape} />
          </ButtonIcon>
        </AvatarContainer>

        <Content>
          <UserInfoContent>
            <Input
              name="name"
              control={control}
              error={errors?.email?.name}
              returnKeyType="done"
              icon="account"
              placeholder="Seu Nome"
              autoCapitalize="words"
            />

            <Input
              name="email"
              keyboardType="email-address"
              control={control}
              error={errors?.email?.message}
              returnKeyType="done"
              icon="email"
              placeholder="Seu E-mail"
              autoCapitalize="none"
            />
          </UserInfoContent>

          <PasswordContent>
            <Input
              name="oldPassword"
              keyboardType="default"
              control={control}
              error={errors?.email?.message}
              returnKeyType="done"
              icon="lock"
              placeholder="Senha atual"
              autoCapitalize="none"
              pass
            />

            <Input
              name="newPassword"
              keyboardType="default"
              control={control}
              error={errors?.email?.message}
              returnKeyType="done"
              icon="lock"
              placeholder="Sua senha nova"
              autoCapitalize="none"
              pass
            />

            <Input
              name="confirmPassword"
              keyboardType="default"
              control={control}
              error={errors?.email?.message}
              returnKeyType="done"
              icon="lock"
              placeholder="Confirme sua senha"
              autoCapitalize="none"
              pass
            />
          </PasswordContent>
        </Content>
        <ButtonPrimary onPress={handleSubmit(() => {})} textButton="Salvar" />
      </Scroll>
    </Container>
  );
};

export { Profile };
