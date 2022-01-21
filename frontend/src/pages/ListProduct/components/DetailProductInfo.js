/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function DetailProductInfo({ data }) {
  return (
    <Box>
      <Typography>{data.name}</Typography>
      <Typography>Ma san pham: {data.typeId}</Typography>
      <Typography>Loai san pham: {data.selectedId}</Typography>
      <Typography>Gia: {data.cost}</Typography>
      <Typography>Mo ta: {data.description}</Typography>
    </Box>
  );
}
