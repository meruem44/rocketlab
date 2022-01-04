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
  SubTile,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

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

      <Title>Venha fazer parte dessa comunidade incrível</Title>
      <SubTile>Junte-se a vários devs e acelere seu desenvolvimento</SubTile>
      <Content>
        <Label>Crie sua conta</Label>
        <Form>
          <Input
            name="email"
            keyboardType="email-address"
            control={control}
            error={errors?.email?.message}
            returnKeyType="done"
            icon="email"
            placeholder="Seu E-mail"
          />
          <Input
            name="name"
            control={control}
            error={errors?.name?.message}
            icon="account"
            placeholder="Seu nome"
            returnKeyType="done"
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
            returnKeyType="done"
          />
        </Form>

        <ButtonPrimary
          onPress={handleSubmit(handleSignIn)}
          isLoading={isLoading}
          textButton="Cadastrar"
        />
      </Content>
    </Container>
  );
};

export { SignUp };
