import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.metrics.marginTop}px
    ${({ theme }) => theme.metrics.paddingHorizontal}
    ${({ theme }) => theme.metrics.marginBottom}px;
`;
