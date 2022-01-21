/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import formatCost from '../../../utils/common';

export default function Product({ product }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/danh-sach-san-pham/${product.id}`);
  };

  return (
    <Box padding={1} onClick={handleClick}>
      <Box padding={1} minHeight={200}>
        <img src={product.image} width="100%" alt={product.name} />
      </Box>
      <Typography component="p" variant="body2">
        {product.name}
      </Typography>
      <Typography component="p" variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold">
          {formatCost(product.cost)}
        </Box>
      </Typography>
    </Box>
  );
}
