/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import { Box, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import categoryProductApi from '../../../../api/categoryProduct';
import {
  CATEGORY_ID,
  CATEGORY_LABEL,
  TYPE_ID,
  TYPE_LABEL,
} from '../../../../components/Constants/common';
import useLoading from '../../../../hooks/useLoading';

export default function FilterTypeProduct({ onChange, productType }) {
  const [showLoading, hideLoading] = useLoading();
  const [categoryProduct, setCategoryProduct] = useState([]);

  // Call Api

  const getApi = async () => {
    try {
      // setLoading(true);
      showLoading();
      const categoryData = await categoryProductApi.getAll();
      setCategoryProduct(categoryData);
      // setLoading(false);
      hideLoading();
    } catch (e) {
      // setLoading(false);
      showLoading();
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleChange = (e) => {
    const categoryId = e.target.value;
    if (categoryId === CATEGORY_ID) {
      onChange(null);
      console.log('null Category');
      return;
    }
    onChange(categoryId);
  };

  const newCategoryProduct = categoryProduct.filter((item) => item.typeId === productType);
  const newListCategory = [{ id: CATEGORY_ID, label: CATEGORY_LABEL }, ...newCategoryProduct];
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
      }}
    >
      <TextField
        id="outlined-select-currency"
        select
        label="Danh Sách Sản Phẩm"
        disabled={productType && productType === TYPE_ID}
        defaultValue="620e582b00bcd7877ee2aa97"
        onChange={handleChange}
      >
        {newListCategory &&
          newListCategory.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
}
