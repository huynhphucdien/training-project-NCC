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
    height: '200px',
    maxHeight: '200px',
    borderRadius: '3px 3px 0 0',
  },
  productInfo: {
    padding: '0 0 8px 8px',
    marginTop: 'auto',
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  productName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis !important',
    paddingBottom: '5px',
  },
  productType: {
    color: '#44b5ff',
    fontSize: '.7rem !important',
    lineHeight: '100% important',
    height: '1rem',
    padding: '0 .15rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis !important',
    whiteSpace: 'nowrap',
  },
  productCode: {
    color: 'rgba(0,0,0,.54)',
    fontSize: '.7rem !important',
    lineHeight: '100% important',
    height: '1rem',
    padding: '0 .15rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis !important',
    whiteSpace: 'nowrap',
  },
  paper: {
    boxShadow: 'none !important',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: ' 0 4px 15px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important',
      transition: '0.4s',
      transform: 'translateY(-1%)',
    },
  },
});

export default function Product({ product }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/danh-sach-san-pham/${product.id}`);
  };
  return (
    <Paper className={classes.paper}>
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
          <Typography component="p" className={classes.productCode}>
            {product.productCode}
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
