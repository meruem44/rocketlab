import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { api } from "@services/api";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "native-base";

import LogoSvg from "@assets/logo.svg";

import { Input } from "@components/Form/Input";
import { ButtonPrimary } from "@components/Buttons/ButtonPrimary";
import { KeyboardDismiss } from "@components/KeyboardDismiss";

import {
  Container,
  Title,
  Content,
  Scroll,
  Form,
  Label,
  SubTile,
  ContentButton,
  TextButton,
} from "./styles";
import { ButtonVoid } from "@components/Buttons/ButtonVoid";

const schema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  name: Yup.string().required("Nome obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve conter pelo menos 6 Caracteres")
    .required("Uma senha de 6 caracteres é obrigatória"),
  confirmPassword: Yup.string()
    .min(6, "A senha deve conter pelo menos 6 Caracteres")
    .required("Você precisa confirmar a senha")
    .min(6, "A senha deve conter pelo menos 6 Caracteres")
    .oneOf([Yup.ref("password"), null], "As senhas não são iguais"),
});

interface FormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const Toast = useToast();
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = useCallback(async ({ email, name, password }) => {
    setIsLoading(true);

    Keyboard.dismiss();

    try {
      const body = {
        email,
        name,
        password,
      };

      console.log(body);

      await api.post("/users", body);

      Toast.show({
        placement: "top",
        title: "Cadastro realizado com sucesso!",
        description: "Agora faça o login na plataforma",
        status: "success",
      });

      goBack();
    } catch (error) {
      console.log(error.response);
      Toast.show({
        placement: "top",
        title: "Ops, ocorreu um erro no cadastro!",
        description: "Aconteceu um erro na criação do seu cadastro.",
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <KeyboardDismiss>
      <Scroll showsVerticalScrollIndicator={false}>
        <Container>
          <LogoSvg width={RFValue(220)} height={RFValue(80)} />

          <Title>Venha fazer parte dessa comunidade incrível</Title>
          <SubTile>
            Junte-se a vários devs e acelere seu desenvolvimento
          </SubTile>

          <ContentButton>
            <ButtonVoid
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={goBack}
            >
              <Feather
                color={colors.primary}
                name="arrow-left"
                size={RFValue(25)}
              />
              <TextButton>Voltar</TextButton>
            </ButtonVoid>
          </ContentButton>

          <Content>
            <Label>Crie sua conta</Label>
            <Form>
              <Input
                name="name"
                control={control}
                error={errors?.name?.message}
                icon="account"
                placeholder="Seu nome"
                returnKeyType="done"
                autoCapitalize="words"
              />

              <Input
                name="email"
                control={control}
                error={errors?.email?.message}
                returnKeyType="done"
                icon="email"
                placeholder="Seu E-mail"
                autoCapitalize="none"
              />

              <Input
                name="password"
                control={control}
                error={errors?.password?.message}
                icon="lock"
                placeholder="Sua senha"
                returnKeyType="done"
                pass
              />

              <Input
                name="confirmPassword"
                control={control}
                error={errors?.confirmPassword?.message}
                icon="lock"
                placeholder="Confirmar senha"
                secureTextEntry={true}
              />
            </Form>

            <ButtonPrimary
              onPress={handleSubmit(handleSignIn)}
              isLoading={isLoading}
              textButton="Cadastrar"
            />
          </Content>
        </Container>
      </Scroll>
    </KeyboardDismiss>
  );
};

export { SignUp };
