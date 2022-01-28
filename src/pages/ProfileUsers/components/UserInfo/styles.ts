import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: ${RFValue(30)}px;
`;

export const AvatarContainer = styled.View`
  align-self: center;
  height: ${RFValue(120)}px;
  width: ${RFValue(120)}px;
  border-radius: ${RFValue(120)}px;
  border-width: ${RFValue(2)}px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const Avatar = styled.Image`
  height: ${RFValue(105)}px;
  width: ${RFValue(105)}px;
  border-radius: ${RFValue(105)}px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(19)}px;
  font-family: ${({ theme }) => theme.fonts.primary700};
  text-align: center;
  margin-top: ${RFValue(15)}px;
`;
