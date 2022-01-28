import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/auth";
import { RFValue } from "react-native-responsive-fontsize";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ModalDefault } from "@components/Modals/ModalDefault";
import { Input } from "@components/Form/Input";
import { ButtonPrimary } from "@components/Buttons/ButtonPrimary";

import { Container, Content } from "./styles";
import { TextArea } from "@components/Form/TextArea";

interface handleSaveUserProps {
  bio: string;
  whatsapp: string;
  github: string;
  linkedin: string;
}

interface ModalEditContactUserProps {
  viewModal: boolean;
  onClose(): void;
}

const ModalEditContactUser: React.FC<ModalEditContactUserProps> = ({
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
      bio: user?.bio,
      whatsapp: user?.whatsapp,
      github: user?.github,
      linkedin: user?.linkedin,
    },
  });

  const handleSaveUser = useCallback(
    async ({ bio, github, linkedin, whatsapp }: handleSaveUserProps) => {
      try {
        setLoading(true);

        const userInfo = user;

        Object.assign(userInfo, { bio, github, linkedin, whatsapp });

        const response = await updateUser({
          user: userInfo,
          about: true,
        });

        if (response) {
          alert("deu um erro");
        }

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
        title="Minhas informações"
      >
        <Content>
          <TextArea
            label="Sua bio"
            name="bio"
            error={errors.bio?.message}
            control={control}
            icon="card-account-details-star"
            placeholder="Minha bio"
          />

          <Input
            name="whatsapp"
            error={errors.whatsapp?.message}
            control={control}
            icon="whatsapp"
            placeholder="Seu whatsapp"
          />

          <Input
            name="github"
            error=""
            control={control}
            error={errors.github?.message}
            icon="github"
            placeholder="Usuário do github"
          />

          <Input
            name="linkedin"
            error=""
            control={control}
            icon="linkedin"
            placeholder="Link perfil do linkedin"
            error={errors.linkedin?.message}
          />

          <ButtonPrimary
            onPress={handleSubmit(handleSaveUser)}
            style={{
              marginTop: RFValue(30),
            }}
            isLoading={loading}
            textButton="Confirmar alterações"
          />
        </Content>
      </ModalDefault>
    </Container>
  );
};

export { ModalEditContactUser };
