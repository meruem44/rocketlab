import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-left: ${RFValue(10)}px;
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary700};
`;
