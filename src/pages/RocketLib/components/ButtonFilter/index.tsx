import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, TextButton } from "./styles";

interface ButtonFilterProps extends TouchableOpacityProps {
  isActive: boolean;
  textButton: string;
}

const ButtonFilter: React.FC<ButtonFilterProps> = ({
  isActive,
  textButton,
  ...rest
}) => {
  return (
    <Container activeOpacity={0.9} {...rest} isActive={isActive}>
      <TextButton isActive={isActive}>{textButton}</TextButton>
    </Container>
  );
};

export { ButtonFilter };
