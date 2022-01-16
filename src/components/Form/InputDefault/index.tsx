import React, { useCallback, useState, useRef } from "react";
import { TextInputProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  TextInput,
  ContainerIcon,
  ButtonIcon,
  Content,
  Error,
} from "./styles";

interface InputProps extends TextInputProps {
  pass?: boolean;

  error: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const InputDefault: React.FC<InputProps> = ({ pass, error, icon, ...rest }) => {
  const { colors } = useTheme();

  const [textSecurity, setTextSecurity] = useState(!!pass);
  const [isFocus, setIsFocus] = useState(false);

  const handleChangeTextSecurity = useCallback(() => {
    setTextSecurity((oldValue) => !oldValue);
  }, []);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <Container>
      <Content isFocus={isFocus} error={!!error}>
        <ContainerIcon>
          <MaterialCommunityIcons
            color={isFocus ? colors.primary : colors.bg}
            name={icon}
            size={RFValue(22)}
          />
        </ContainerIcon>
        <TextInput
          placeholderTextColor={colors.bg}
          secureTextEntry={textSecurity}
          onFocus={onFocus}
          onBlur={onBlur}
          {...rest}
        />

        {pass && (
          <ContainerIcon>
            <ButtonIcon activeOpacity={0.9} onPress={handleChangeTextSecurity}>
              <MaterialCommunityIcons
                color={colors.primary}
                name={textSecurity ? "eye-off" : "eye"}
                size={RFValue(18)}
              />
            </ButtonIcon>
          </ContainerIcon>
        )}
      </Content>
      {!!error && <Error>{error}</Error>}
    </Container>
  );
};

export { InputDefault };
