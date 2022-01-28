import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface AvatarContainerProps {
  isAvatar: boolean;
}

export const Container = styled.View`
  margin-top: ${RFValue(30)}px;
`;

export const AvatarContainer = styled.View<AvatarContainerProps>`
  align-self: center;
  height: ${RFValue(120)}px;
  width: ${RFValue(120)}px;
  border-radius: ${RFValue(120)}px;
  border-width: ${RFValue(2)}px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.primary};

  ${({ isAvatar }) =>
    !isAvatar &&
    css`
      border-color: ${({ theme }) => theme.colors.bgExtraLight};
    `}
`;

export const Avatar = styled.Image`
  height: ${RFValue(105)}px;
  width: ${RFValue(105)}px;
  border-radius: ${RFValue(105)}px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
`;

export const ButtonIconAvatar = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  bottom: 0px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(19)}px;
  font-family: ${({ theme }) => theme.fonts.primary700};
  text-align: center;
  margin-top: ${RFValue(15)}px;
`;

export const UserJob = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary500};
  text-align: center;
  margin-top: ${RFValue(10)}px;
`;
