import React from "react";
import { TouchableOpacityProps } from "react-native";

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
  return (
    <Container disabled={isLoading} activeOpacity={0.9} {...rest}>
      {!isLoading && <TextButton>{textButton}</TextButton>}

      {isLoading && <Load animating={isLoading} size="small" />}
    </Container>
  );
};

export { ButtonPrimary };
