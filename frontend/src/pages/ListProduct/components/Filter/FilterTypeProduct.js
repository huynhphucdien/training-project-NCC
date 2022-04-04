/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import { Box, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import typeProductApi from '../../../../api/typeProduct';
import { TYPE_ID, TYPE_LABEL } from '../../../../components/Constants/common';
import useLoading from '../../../../hooks/useLoading';

export default function FilterTypeProduct({ onChange, queryParams, productType }) {
  const [showLoading, hideLoading] = useLoading();
  const [typeProduct, setTypeProduct] = useState([]);

  // Call Api

  const getApi = async () => {
    try {
      // setLoading(true);
      showLoading();
      const typeData = await typeProductApi.getAll();
      setTypeProduct(typeData);
      // setLoading(false);
      hideLoading();
    } catch (e) {
      console.log(e);
      hideLoading();
    }
    hideLoading();
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleChange = (e) => {
    const typeId = e.target.value;
    onChange(typeId);
  };
  const typeValue = queryParams.productType ? queryParams.productType : TYPE_ID;
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
      }}
    >
      <TextField
        id="outlined-select-currency"
        select
        label="Loại Sản Phẩm"
        value={typeValue}
        onChange={handleChange}
      >
        {typeProduct &&
          typeProduct.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
}
