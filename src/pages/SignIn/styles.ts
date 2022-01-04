import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  justify-content: center;
  padding: ${({ theme }) => theme.metrics.marginTop}px 5%
    ${({ theme }) => theme.metrics.marginBottom}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(35)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary700};
  margin: ${RFValue(27)}px 0px;
`;

export const Content = styled.View`
  padding: ${RFValue(20)}px ${RFValue(15)}px ${RFValue(25)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: ${RFValue(5)}px;
  margin-top: ${RFValue(30)}px;
`;

export const Form = styled.View`
  margin-bottom: ${RFValue(30)}px;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary700};
`;

export const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary400};
`;

export const ButtonPassword = styled.View`
  margin-top: ${RFValue(6)}px;
`;

export const Button = styled.TouchableOpacity``;

export const ContentDescription = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(25)}px;
`;
