import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgExtraLight};
  width: 45%;
  height: ${RFValue(50)}px;
  justify-content: center;
  border-radius: ${RFValue(4)}px;
  margin-right: ${RFValue(10)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary400};
  margin-left: ${RFValue(10)}px;
`;
