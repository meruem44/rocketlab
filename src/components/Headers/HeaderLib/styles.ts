import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.bgLight};
  height: ${RFValue(60)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal};
`;

export const ContainerAvatar = styled.TouchableOpacity`
  height: ${RFValue(38)}px;
  width: ${RFValue(38)}px;
  border-radius: ${RFValue(38 / 2)}px;
  border-width: ${RFValue(2)}px;
  border-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-left: ${RFValue(15)}px;
`;

export const Avatar = styled.Image`
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;
  border-radius: ${RFValue(30 / 2)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;
