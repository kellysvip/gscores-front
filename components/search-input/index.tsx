import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

type SearchInputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
};

export function SearchInput({ handleChange, defaultValue }: SearchInputProps) {
  const [value, setValue] = useState(defaultValue || "");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    setValue(event.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };

  return (
    <TextField
      aria-label="search-field"
      size="small"
      variant="outlined"
      onChange={handleChangeInput}
      value={value}
      onKeyDown={handleKeyDown}
      sx={{ marginTop: 1 }}
      inputProps={{
        maxLength: 10,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}
