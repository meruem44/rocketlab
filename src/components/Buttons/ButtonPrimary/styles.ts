import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(55)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary500};
`;

export const Load = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors.shape};
`;
