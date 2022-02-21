/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Paper, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL_IMAGE } from '../../../components/Constants';
import formatCost from '../../../utils/formatNumber';

const useStyles = makeStyles({
  productImage: {
    marginBottom: '8px',
    objectFit: 'cover',
    height: '250px',
    maxHeight: '250px',
  },
  productInfo: {
    padding: '0',
    marginTop: 'auto',
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  productName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis !important',
  },
  productType: {
    color: '#44b5ff',
    fontSize: '.65rem !important',
    lineHeight: '100% important',
    height: '1rem',
    padding: '.125rem .25rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis !important',
    whiteSpace: 'nowrap',
  },
});

export default function Product({ product }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/danh-sach-san-pham/${product.id}`);
  };
  return (
    <Paper>
      <Stack onClick={handleClick} justifyContent="space-between" height="100%">
        <Box>
          <img
            src={`${URL_IMAGE}${product.mainImage}`}
            className={classes.productImage}
            width="100%"
            height="100%"
            alt={product.productName}
          />
        </Box>
        <Box className={classes.productInfo}>
          <Typography component="p" variant="h6" className={classes.productName}>
            {product.productName}
          </Typography>
          <Typography component="p" className={classes.productType}>
            Loại sản phẩm: {product.productType.label}
          </Typography>
          <Typography component="p" variant="body2">
            <Typography component="span" fontSize="1.2" color="red">
              {formatCost(product.productCost)}
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
