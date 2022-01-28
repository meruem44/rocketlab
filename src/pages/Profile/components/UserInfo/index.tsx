import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useAuth } from "@contexts/auth";

import * as ImagePicker from "expo-image-picker";

import { Feather } from "@expo/vector-icons";

import { ModalConfirmPicker, FileProps } from "./components/ModalConfirmPicker";

import {
  Container,
  AvatarContainer,
  Avatar,
  ButtonIcon,
  UserName,
  UserJob,
  ButtonIconAvatar,
} from "./styles";
import { ModalEditInfoUser } from "./components/ModalEditInfoUser";

const UserInfo: React.FC = () => {
  const { colors } = useTheme();
  const { user } = useAuth();

  const [file, setFile] = useState<FileProps>({} as FileProps);
  const [viewModalEditUser, setViewModalEditUser] = useState(false);

  const pickImage = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.cancelled) {
      console.log(result);
      setFile({
        type: result?.type,
        uri: result?.uri,
      });
    }
  }, []);

  return (
    <Container>
      <AvatarContainer isAvatar={false}>
        {user?.avatar && (
          <Avatar
            source={{
              uri: user?.avatar,
            }}
          />
        )}

        {!user?.avatar && (
          <Feather
            name="image"
            size={RFValue(30)}
            color={colors.bgExtraLight}
          />
        )}

        <ButtonIconAvatar onPress={pickImage} activeOpacity={0.9}>
          <Feather name="camera" size={RFValue(20)} color={colors.shape} />
        </ButtonIconAvatar>
      </AvatarContainer>

      {!!file?.uri && (
        <ModalConfirmPicker
          onClose={() => setFile({} as FileProps)}
          file={file}
        />
      )}

      {viewModalEditUser && (
        <ModalEditInfoUser
          onClose={() => setViewModalEditUser(false)}
          viewModal={viewModalEditUser}
        />
      )}

      <ButtonIcon onPress={() => setViewModalEditUser(true)}>
        <Feather name="edit-3" size={RFValue(20)} color={colors.shape} />
      </ButtonIcon>

      <UserName>{user?.name}</UserName>
      <UserJob>{user?.job}</UserJob>
    </Container>
  );
};

export { UserInfo };
