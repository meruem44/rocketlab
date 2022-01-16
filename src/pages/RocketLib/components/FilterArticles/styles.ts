import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 0px ${({ theme }) => theme.metrics.paddingHorizontal};
`;
