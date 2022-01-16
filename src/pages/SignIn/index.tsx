import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@contexts/auth";
import { useToast } from "native-base";
import { RFValue } from "react-native-responsive-fontsize";
import { Keyboard } from "react-native";

import LogoSvg from "@assets/logo.svg";

import { Input } from "@components/Form/Input";
import { ButtonPrimary } from "@components/Buttons/ButtonPrimary";
import { KeyboardDismiss } from "@components/KeyboardDismiss";

import {
  Container,
  Title,
  Content,
  Button,
  TextButton,
  Form,
  Label,
  ButtonPassword,
  ContentDescription,
} from "./styles";

const schema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve conter pelo menos 6 Caracteres")
    .required(),
});

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const Toast = useToast();

  const { handleSignIn } = useAuth();
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleAuthenticate = useCallback(
    async ({ email, password }: FormData) => {
      setIsLoading(true);

      Keyboard.dismiss();

      try {
        const response = await handleSignIn({ email, password });

        alert(response);
      } catch (error) {
        Toast.show({
          placement: "top",
          title: "Ops, ocorreu um erro no cadastro!",
          description: "Aconteceu um erro na criação do seu cadastro.",
          status: "error",
        });
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  const handleNavigateSignUp = useCallback(() => {
    navigate("SignUp" as never);
  }, []);

  return (
    <KeyboardDismiss>
      <Container>
        <LogoSvg width={RFValue(220)} height={RFValue(80)} />

        <Title>Faça seu login {"\n"}na plataforma</Title>

        <Content>
          <Form>
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

            <Input
              name="password"
              control={control}
              error={errors?.password?.message}
              icon="lock"
              placeholder="Sua senha"
              returnKeyType="done"
              pass
            />

            <ButtonPassword>
              <TextButton>Esqueci a senha</TextButton>
            </ButtonPassword>
          </Form>

          <ButtonPrimary
            onPress={handleSubmit(handleAuthenticate)}
            isLoading={isLoading}
            textButton="Entrar"
          />

          <ContentDescription>
            <Label>Não tem uma conta? </Label>
            <Button onPress={handleNavigateSignUp}>
              <TextButton>Registre-se</TextButton>
            </Button>
          </ContentDescription>
        </Content>
      </Container>
    </KeyboardDismiss>
  );
};

export { SignIn };
