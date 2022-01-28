import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const Content = styled.View``;

export const UserBio = styled.Text`
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary400};
  width: 100%;
`;

export const Footer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${RFValue(20)}px;
`;
