import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  margin: ${RFValue(20)}px 0px;
`;

export const ImageConfirm = styled.Image`
  width: 90%;
  height: ${RFValue(300)}px;
  align-self: center;
  border-radius: ${RFValue(10)}px;
`;

export const Footer = styled.View`
  margin-top: ${RFValue(30)}px;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary700};
`;
