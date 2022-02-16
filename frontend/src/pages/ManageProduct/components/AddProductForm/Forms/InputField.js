/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import { Box, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function InputField(props) {
  const { form, name, label, multiline, rows, disabled, type, keyChange, mouseScroll } = props;
  const { errors } = form;
  const hasError = errors?.[name];
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { mb: 2 },
      }}
    >
      <Controller
        control={form.control}
        name={name}
        as={TextField}
        type={type}
        fullWidth
        label={label}
        multiline={!!multiline}
        rows={rows}
        error={!!hasError}
        helperText={errors[name]?.message}
        disabled={disabled}
        onKeyDown={keyChange}
        onWheel={mouseScroll}
      />
    </Box>
  );
}
