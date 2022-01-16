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
`;

export const List = styled.FlatList`
  flex: 1;
`;

export const Header = styled.View`
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal};
  margin-bottom: ${RFValue(10)}px;
`;
