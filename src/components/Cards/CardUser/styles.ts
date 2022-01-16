import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.bgLight};
  height: ${RFValue(80)}px;
  margin-bottom: ${RFValue(10)}px;
  border-radius: ${RFValue(8)}px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(10)}px;
`;

export const ContentAvatar = styled.View`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: ${RFValue(40 / 2)}px;
  justify-content: center;
  margin-right: ${RFValue(6)}px;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: ${RFValue(40 / 2)}px;
  z-index: 99999;
`;

export const ContentInfo = styled.View`
  flex: 1;
`;

export const IconAvatar = styled.View`
  position: absolute;
  z-index: 1;
`;

export const Name = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary700};
`;

export const Job = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary500};
`;

export const Status = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.description};
  font-family: ${({ theme }) => theme.fonts.primary700};
`;
