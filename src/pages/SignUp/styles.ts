import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal}
    ${({ theme }) => theme.metrics.marginBottom}px;

  margin: ${RFValue(20)}px 0px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary700};
  margin: ${RFValue(10)}px 0px;
`;

export const SubTile = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.description};
  font-family: ${({ theme }) => theme.fonts.primary400};
`;

export const Content = styled.View`
  padding: ${RFValue(20)}px ${RFValue(15)}px ${RFValue(25)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: ${RFValue(5)}px;
  justify-content: center;
`;

export const Form = styled.View`
  margin-bottom: ${RFValue(30)}px;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary700};
  margin-left: ${RFValue(10)}px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary700};
`;

export const ContentButton = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${RFValue(18)}px 0px;
`;
