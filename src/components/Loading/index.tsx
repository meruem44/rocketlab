import React from "react";
import { useTheme } from "styled-components";

import { Container, Load } from "./styles";

interface LoadingProps {
  isLoad: boolean;
  size?: "large" | "small";
}

const Loading: React.FC<LoadingProps> = ({ isLoad, size = "small" }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Load animating={isLoad} color={colors.primary} size={size} />
    </Container>
  );
};

export { Loading };
