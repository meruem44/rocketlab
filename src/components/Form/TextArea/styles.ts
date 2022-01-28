import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface StateProps {
  error: boolean;
  isFocus: boolean;
}

export const Container = styled.View`
  margin-top: ${RFValue(15)}px;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.bgExtraLight};
  height: ${RFValue(40)}px;
  padding: 0px ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary400};
  margin-left: ${RFValue(10)}px;
`;

export const Content = styled.View<StateProps>`
  height: ${RFValue(120)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom-left-radius: ${RFValue(5)}px;
  border-bottom-right-radius: ${RFValue(5)}px;
  padding: ${RFValue(15)}px;

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
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary400};
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary400};
`;

export const ButtonIcon = styled.TouchableOpacity``;
