import React, { useCallback, useState } from "react";
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

  console.log(error);

  const [textSecurity, setTextSecurity] = useState(!!pass);

  const handleChangeTextSecurity = useCallback(() => {
    setTextSecurity((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <Content error={!!error}>
        <ContainerIcon>
          <MaterialCommunityIcons
            color={colors.bgExtraLight}
            name={icon}
            size={RFValue(24)}
          />
        </ContainerIcon>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholderTextColor={colors.bgExtraLight}
              {...rest}
              secureTextEntry={textSecurity}
            />
          )}
        />

        {pass && (
          <ContainerIcon>
            <ButtonIcon activeOpacity={0.9} onPress={handleChangeTextSecurity}>
              <MaterialCommunityIcons
                color={colors.primary}
                name={textSecurity ? "eye-off" : "eye"}
                size={RFValue(24)}
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
