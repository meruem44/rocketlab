import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  padding-top: ${({ theme }) => theme.metrics.marginTop}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal};
  margin-top: ${RFValue(20)}px;
`;

export const List = styled.FlatList`
  flex: 1;
`;
