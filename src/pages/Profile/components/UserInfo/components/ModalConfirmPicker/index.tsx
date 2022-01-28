import React, { useCallback, useState } from "react";
import { useAuth } from "@contexts/auth";
import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { api } from "@services/api";

import { ModalDefault } from "@components/Modals/ModalDefault";
import { ButtonPrimary } from "@components/Buttons/ButtonPrimary";
import { ButtonVoid } from "@components/Buttons/ButtonVoid";

import { Container, Content, ImageConfirm, TextButton, Footer } from "./styles";

export interface FileProps {
  uri: string;
  type: string;
}

interface ModalConfirmPicker {
  file: FileProps;
  onClose(): void;
}

const ModalConfirmPicker: React.FC<ModalConfirmPicker> = ({
  file,
  onClose,
}) => {
  const { token } = useAuth();

  const handleUpdateUserAvatar = useCallback(async () => {
    try {
      const formData = new FormData();

      const data = {
        name: file?.uri.split("/").pop(),
        type: file?.type,
        uri:
          Platform.OS === "android"
            ? file?.uri
            : file?.uri.replace("file://", ""),
      };

      console.log(data);

      formData.append(
        "file",
        JSON.stringify({
          name: file?.uri.split("/").pop(),
          type: file?.type,
          uri:
            Platform.OS === "android"
              ? file?.uri
              : file?.uri.replace("file://", ""),
        })
      );

      const response = await api.patch("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [file, token]);

  return (
    <Container>
      <ModalDefault
        title="A foto está boa?"
        isVisible={!!file?.uri}
        onClose={onClose}
      >
        <Content>
          <ImageConfirm source={{ uri: file?.uri }} />

          <Footer>
            <ButtonVoid onPress={onClose}>
              <TextButton>Não ficou boa</TextButton>
            </ButtonVoid>
            <ButtonPrimary
              onPress={handleUpdateUserAvatar}
              style={{
                marginTop: RFValue(20),
              }}
              textButton="Ficou boa"
            />
          </Footer>
        </Content>
      </ModalDefault>
    </Container>
  );
};

export { ModalConfirmPicker };
