/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import React from 'react';

export default function ProductTypeTable({ typeProduct, productData }) {
  // const newTypeProduct = productData.map((value) =>
  //   typeProduct.find((item) => item.id === value.productType),
  // );
  //   const renderType = [...newTypeProduct];
  // console.log('newTypeProduct', newTypeProduct);
  const newTypeProduct = productData.map((value) =>
    typeProduct.find((item) => item.id === value.productType),
  );
  return (
    <Box>
      {newTypeProduct.map((item) => (
        <Box key={item.id}>{item.label}</Box>
      ))}

      {/* {newTypeProduct &&
        console.log(
          'render',
          newTypeProduct.map((item) => item.map((x) => x.label)),
        )} */}
    </Box>
  );
}
