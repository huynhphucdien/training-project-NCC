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

export default function FilterTypeProduct({ onChange, typeValue, queryParams, productType }) {
  const [showLoading, hideLoading] = useLoading();
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [value, setValue] = useState('');

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
    setValue(categoryId);
    if (categoryId === CATEGORY_ID) {
      onChange(null);
      return;
    }
    onChange(categoryId);
  };
  // Create categorylist by type
  const newTypeId = queryParams.productType ? queryParams.productType : productType;
  const newCategoryProduct = categoryProduct.filter((item) => item.typeId === newTypeId);
  const newListCategory = [{ id: CATEGORY_ID, label: CATEGORY_LABEL }, ...newCategoryProduct];
  // set value for field
  const categoryValue = queryParams.productCategory ? queryParams.productCategory : CATEGORY_ID;
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
        disabled={newTypeId === TYPE_ID}
        value={categoryValue}
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
