/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import formatCost from '../../../../utils/formatNumber';

const useStyles = makeStyles({
  producDetail: {
    paddingBottom: '32px',
    fontSize: '2rem !important',
  },
  productNameTitle: {
    fontSize: '1.5rem !important',
    fontWeight: '400px !important',
  },
  borderBottom: {
    borderBottom: '1px solid #8080803b',
    padding: '16px 0',
    marginBottom: '16px',
  },
});

export default function DetailProductInfo({ data }) {
  const classes = useStyles();
  return (
    <Box padding={2}>
      <Box>
        <Typography component="h1" variant="h3" className={classes.productName}>
          {data.productName}
        </Typography>
      </Box>
      <Box className={classes.borderBottom}>
        <Typography component="h5">
          <Typography component="span" sx={{ pr: 1 }} className={classes.productNameTitle}>
            Mã sản phẩm:
          </Typography>
          <Typography component="span">{data.productCode}</Typography>
        </Typography>
        <Typography component="h5">
          <Typography component="span" sx={{ pr: 1 }} className={classes.productNameTitle}>
            Loại sản phẩm:
          </Typography>
          <Typography component="span">{data.productCategory?.label}</Typography>
        </Typography>
        <Typography component="h5">
          <Typography component="span" sx={{ pr: 1 }} className={classes.productNameTitle}>
            Giá:
          </Typography>
          <Typography component="span">{formatCost(data.productCost)}</Typography>
        </Typography>
      </Box>
      <Typography component="h5">
        <Typography component="span" sx={{ pr: 1 }} className={classes.productNameTitle}>
          Mô tả:
        </Typography>
        <Typography component="span">{data.productDescription}</Typography>
      </Typography>
    </Box>
  );
}
