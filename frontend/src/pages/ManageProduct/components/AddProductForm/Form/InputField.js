/* eslint-disable react/prop-types */
import { Box, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function InputField(props) {
  const { form, name, label } = props;
  const { errors } = form;
  const hasError = errors?.[name];
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        '& .MuiTextField-root': { mb: 2, mt: 2 },
      }}
    >
      <Controller
        control={form.control}
        name={name}
        as={TextField}
        fullWidth
        label={label}
        error={!!hasError}
        helperText={errors[name]?.message}
      />
    </Box>
  );
}
