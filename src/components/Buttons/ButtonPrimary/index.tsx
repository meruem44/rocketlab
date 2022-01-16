import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, TextButton, Load } from "./styles";

interface ButtonPrimary extends TouchableOpacityProps {
  textButton: string;
  isLoading?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimary> = ({
  textButton,
  isLoading,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container disabled={isLoading} activeOpacity={0.9} {...rest}>
      {!isLoading && <TextButton>{textButton}</TextButton>}

      {isLoading && (
        <Load color={colors.shape} animating={isLoading} size="small" />
      )}
    </Container>
  );
};

export { ButtonPrimary };
