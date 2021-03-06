import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.metrics.marginTop}px
    ${({ theme }) => theme.metrics.paddingHorizontal}
    ${({ theme }) => theme.metrics.marginBottom + RFValue(20)}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary500};
`;

export const Scroll = styled.ScrollView``;

export const Content = styled.View`
  padding: ${RFValue(20)}px ${RFValue(15)}px ${RFValue(25)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: ${RFValue(5)}px;
  margin-top: ${RFValue(30)}px;
  margin: ${RFValue(20)}px 0px;
  margin-bottom: ${RFValue(10)}px;
`;

export const UserInfoContent = styled.View``;

export const PasswordContent = styled.View``;
