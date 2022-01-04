import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import LogoSvg from "@assets/logo.svg";

import { Input } from "@components/Form/Input";
import { ButtonPrimary } from "@components/ButtonPrimary";

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
import { RFValue } from "react-native-responsive-fontsize";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = useCallback(async ({ email, password }: FormData) => {
    try {
      console.log(email, password);
    } catch (error) {}
  }, []);

  return (
    <Container>
      <LogoSvg width={RFValue(220)} height={RFValue(80)} />

      <Title>Faça seu login {"\n"}na plataforma</Title>

      <Content>
        <Form>
          <Input
            name="email"
            keyboardType="email-address"
            control={control}
            error={errors?.email}
            returnKeyType="done"
            icon="email"
            placeholder="E-mail"
            secureTextEntry={true}
          />
          <Input
            name="password"
            control={control}
            pass
            keyboardType="visible-password"
            error={errors?.password}
            icon="lock"
            placeholder="Senha"
            secureTextEntry
          />

          <ButtonPassword>
            <TextButton>Esqueci a senha</TextButton>
          </ButtonPassword>
        </Form>

        <ButtonPrimary
          onPress={handleSubmit(handleSignIn)}
          isLoading={isLoading}
          textButton="Entrar"
        />

        <ContentDescription>
          <Label>Não tem uma conta? </Label>
          <Button>
            <TextButton>Registre-se</TextButton>
          </Button>
        </ContentDescription>
      </Content>
    </Container>
  );
};

export { SignIn };
