import React from "react";
import { TextField } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldValues, Path } from "react-hook-form-mui";
import { InputWrapper } from "../styled-components";
import InputTitle from "./input-title";

type TextInputProps<T extends FieldValues> = {
  isEditMode: boolean;
  name: string;
  register: UseFormRegister<T>;
  errors: Record<string, string>;
  style?: SxProps<Theme>;
  translationId: string;
  value?: any;
  disabled?: boolean;
  multipleLine?: boolean;
  type?: React.InputHTMLAttributes<unknown>["type"];
};

export default function TextInput<T extends FieldValues>({
  isEditMode,
  errors,
  register,
  name,
  style,
  value,
  disabled,
  translationId,
  multipleLine,
  type,
}: TextInputProps<T>) {
  const errorMsg = errors[`${name}`];

  return (
    <InputWrapper>
      <InputTitle translationId={translationId} />
      <TextField
        type={type}
        multiline={multipleLine}
        aria-label={name}
        value={value}
        disabled={disabled}
        className={isEditMode ? "editMode" : ""}
        variant="standard"
        onKeyDown={(event) => {
          event.stopPropagation();
        }}
        inputProps={{
          disabled: !isEditMode,
          ...register(name as Path<T>),
        }}
        sx={style}
        error={!!errorMsg}
        helperText={errorMsg}
      />
    </InputWrapper>
  );
}
