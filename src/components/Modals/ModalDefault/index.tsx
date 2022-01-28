import React from "react";
import { useTheme } from "styled-components";

import { AntDesign } from "@expo/vector-icons";

import { ButtonVoid } from "@components/Buttons/ButtonVoid";

import { Container, Modal, Content, Header, Title } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

interface ModalDefaultProps {
  isVisible: boolean;
  onClose(): void;
  title: string;
}

const ModalDefault: React.FC<ModalDefaultProps> = ({
  isVisible,
  onClose,
  title,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
      transparent
    >
      <Container>
        <Content>
          <Header>
            <Title>{title}</Title>

            <ButtonVoid onPress={onClose}>
              <AntDesign
                color={colors.description}
                name="close"
                size={RFValue(20)}
              />
            </ButtonVoid>
          </Header>

          {children}
        </Content>
      </Container>
    </Modal>
  );
};

export { ModalDefault };
