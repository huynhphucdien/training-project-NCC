/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable */
import { Box, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { TYPE_LABEL } from '../../../../../components/Constants/common';

export default function SelectField(props) {
  const {
    form,
    name,
    label,
    productType,
    productCategory,
    typeProductLabel,
    categoryProductLabel,
    getTypeLabel,
    typeLabel,
  } = props;
  // console.log(productCategoryTable);
  // Handle error
  const { errors } = form;
  const hasError = errors?.[name];

  const handleChange = (e) => {
    const value = e.target.value;
    if (productType || typeProductLabel) getTypeLabel(value);
  };

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
        label={label}
        fullWidth
        disabled={typeLabel && typeLabel === TYPE_LABEL}
        error={!!hasError}
        select
        onInput={handleChange}
        SelectProps={{
          native: true,
        }}
        helperText={errors[name]?.message}
      >
        {productType &&
          productType.map((option) => (
            <option key={option.id} value={option.label}>
              {option.label}
            </option>
          ))}
        {productCategory &&
          productCategory.map((option) => (
            <option key={option.id} value={option.label}>
              {option.label}
            </option>
          ))}

        {/* //-------Update--------- */}
        {typeProductLabel &&
          typeProductLabel.map((option) => (
            <option key={option.id} value={option.label}>
              {option.label}
            </option>
          ))}
        {categoryProductLabel &&
          categoryProductLabel.map((option) => (
            <option key={option.id} value={option.label}>
              {option.label}
            </option>
          ))}
      </Controller>
    </Box>
  );
}
