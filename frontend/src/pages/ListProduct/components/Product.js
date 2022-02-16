/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import formatCost from '../../../utils/formatNumber';

const useStyles = makeStyles({
  productImage: {
    marginBottom: '8px',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '0 16px 16px',
    marginTop: 'auto',
  },
});

export default function Product({ product }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/danh-sach-san-pham/${product.id}`);
  };
  return (
    <Stack
      padding={1}
      onClick={handleClick}
      justifyContent="space-between"
      height="100%"
    >
      <Box padding={1} minHeight={220} className={classes.productImage}>
        <img
          src={product.mainImage}
          width="100%"
          height="100%"
          alt={product.productName}
        />
      </Box>
      <Box className={classes.productInfo}>
        <Typography component="p" variant="body2">
          {product.productName}
        </Typography>
        <Typography component="p" variant="body2">
          <Typography component="span" fontSize="16px" fontWeight="bold">
            {formatCost(product.productCost)}
          </Typography>
        </Typography>
      </Box>
    </Stack>
  );
}
