import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10% ${({ theme }) => theme.metrics.paddingHorizontal};
  justify-content: center;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(20)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary700};
`;
