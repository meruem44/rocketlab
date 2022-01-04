import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.TouchableOpacity`
  height: ${RFValue(380)}px;
  background-color: ${({ theme }) => theme.colors.bgLight};
  margin-bottom: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  width: 100%;
`;

export const ContainerBanner = styled.View`
  flex: 1;
`;

export const Banner = styled.Image`
  flex: 1;
  border-top-left-radius: ${RFValue(10)}px;
  border-top-right-radius: ${RFValue(10)}px; ;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(20)}px;
`;

export const GroupInfo = styled.View`
  flex: 1;
`;

export const ContainerTags = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(20)}px;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Tag = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary700};
  margin-right: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary500};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostDate = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary400};
`;

export const TimeRead = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary400};
  margin-left: ${RFValue(10)}px;
`;
