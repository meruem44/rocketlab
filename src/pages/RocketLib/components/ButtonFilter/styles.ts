import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface IsActiveProps {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<IsActiveProps>`
  height: ${RFValue(50)}px;
  justify-content: center;
  padding: 0px ${RFValue(8)}px;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom-width: ${RFValue(2)}px;
      border-color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const TextButton = styled.Text<IsActiveProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.primary400};

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`;
