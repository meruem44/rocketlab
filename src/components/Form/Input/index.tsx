import React, { useCallback, useState, useRef } from "react";
import { TextInputProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { Controller, Control } from "react-hook-form";

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
  control: Control;
  name: string;
  error: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const Input: React.FC<InputProps> = ({
  pass,
  control,
  name,
  error,
  icon,
  ...rest
}) => {
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
            color={isFocus ? colors.primary : colors.bgExtraLight}
            name={icon}
            size={RFValue(20)}
          />
        </ContainerIcon>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholderTextColor={colors.bgExtraLight}
                secureTextEntry={textSecurity}
                onFocus={onFocus}
                onBlur={onBlur}
                {...rest}
              />
            );
          }}
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

export { Input };
