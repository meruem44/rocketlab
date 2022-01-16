import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface StateProps {
  error: boolean;
  isFocus: boolean;
}

export const Container = styled.View`
  margin-top: ${RFValue(15)}px;
`;

export const Content = styled.View<StateProps>`
  flex-direction: row;
  align-items: center;
  height: ${RFValue(50)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgExtraLight};
  border-radius: ${RFValue(5)}px;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-width: ${RFValue(1)}px;
      border-color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ error }) =>
    error &&
    css`
      border-width: ${RFValue(1)}px;
      border-color: ${({ theme }) => theme.colors.error};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary400};
`;

export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0px ${RFValue(15)}px;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary400};
`;

export const ButtonIcon = styled.TouchableOpacity``;
