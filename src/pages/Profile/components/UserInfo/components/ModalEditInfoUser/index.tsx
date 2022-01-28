import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/auth";
import { RFValue } from "react-native-responsive-fontsize";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ModalDefault } from "@components/Modals/ModalDefault";
import { Input } from "@components/Form/Input";
import { ButtonPrimary } from "@components/Buttons/ButtonPrimary";

import { Container, Content } from "./styles";

interface handleSaveUserProps {
  name: string;
  email: string;
  job: string;
}

interface ModalEditInfoUserProps {
  viewModal: boolean;
  onClose(): void;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  job: Yup.string(),
});

const ModalEditInfoUser: React.FC<ModalEditInfoUserProps> = ({
  viewModal,
  onClose,
}) => {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      job: user?.job,
    },
    resolver: yupResolver(schema),
  });

  const handleSaveUser = useCallback(
    async ({ email, job, name }: handleSaveUserProps) => {
      try {
        setLoading(true);

        const userInfo = user;

        Object.assign(userInfo, { email, job, name });

        await updateUser({
          user: userInfo,
        });

        onClose();
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <Container>
      <ModalDefault
        isVisible={viewModal}
        onClose={onClose}
        title="Editar perfil"
      >
        <Content>
          <Input
            name="name"
            error={errors.name?.message}
            control={control}
            icon="account"
            placeholder="Seu Nome"
          />

          <Input
            name="email"
            error=""
            control={control}
            error={errors.email?.message}
            icon="email"
            placeholder="Seu email"
          />

          <Input
            name="job"
            error=""
            control={control}
            icon="wallet-travel"
            placeholder="Seu cargo"
            error={errors.job?.message}
          />

          <ButtonPrimary
            onPress={handleSubmit(handleSaveUser)}
            style={{
              marginTop: RFValue(30),
            }}
            isLoading={loading}
            textButton="Salvar"
          />
        </Content>
      </ModalDefault>
    </Container>
  );
};

export { ModalEditInfoUser };
