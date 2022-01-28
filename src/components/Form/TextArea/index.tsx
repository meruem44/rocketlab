import React, { useCallback, useState } from "react";
import { TextInputProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { Controller, Control } from "react-hook-form";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, TextInput, Content, Error, Header, Label } from "./styles";

interface TextAreaProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
  label: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const TextArea: React.FC<TextAreaProps> = ({
  control,
  name,
  error,
  label,
  icon,
  ...rest
}) => {
  const { colors } = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons
          name={icon}
          size={RFValue(18)}
          color={isFocus ? colors.primary : colors.bg}
        />
        <Label>{label}</Label>
      </Header>

      <Content isFocus={isFocus} error={!!error}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholderTextColor={colors.bgExtraLight}
                onFocus={onFocus}
                onBlur={onBlur}
                {...rest}
              />
            );
          }}
        />
      </Content>
      {!!error && <Error>{error}</Error>}
    </Container>
  );
};

export { TextArea };
