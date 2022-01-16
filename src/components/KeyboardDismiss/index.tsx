import React, { useCallback } from "react";
import { Keyboard } from "react-native";

import { Container } from "./styles";

const KeyboardDismiss: React.FC = ({ children }) => {
  const handleCloseKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return <Container onPress={handleCloseKeyboard}>{children}</Container>;
};

export { KeyboardDismiss };
