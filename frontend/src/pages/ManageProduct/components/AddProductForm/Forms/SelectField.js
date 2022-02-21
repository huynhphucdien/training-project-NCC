/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable */
import { Box, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { TYPE_ID } from '../../../../../components/Constants/common';

export default function SelectField(props) {
  const {
    form,
    name,
    label,
    productType,
    productCategory,
    typeProductUpdate,
    productCategoryUpdate,
    getTypeId,
    typeId,
  } = props;

  // console.log(productCategoryTable);
  // Handle error
  const { errors } = form;
  const hasError = errors?.[name];

  const handleChange = (e) => {
    const value = e.target.value;
    if (productType || typeProductUpdate) getTypeId(value);
    console.log('value', value);
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
        disabled={typeId === TYPE_ID}
        error={!!hasError}
        select
        onInput={handleChange}
        SelectProps={{
          native: true,
        }}
        helperText={errors[name]?.message}
        // onBlur={handleBlur}
      >
        {/* //-------Add Product--------- */}
        {productType &&
          productType.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        {productCategory &&
          productCategory.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}

        {/* //-------Update--------- */}
        {typeProductUpdate &&
          typeProductUpdate.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        {productCategoryUpdate &&
          productCategoryUpdate.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
      </Controller>
    </Box>
  );
}
