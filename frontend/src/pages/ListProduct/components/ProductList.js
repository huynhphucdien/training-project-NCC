/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Product from './Product';

const useStyles = makeStyles({
  ProductList: {
    // borderRadius: '3px',
    minHeight: '250px',
    objectFit: 'cover',
    overflow: 'hidden',
  },
});

export default function ProductList({ data }) {
  const classes = useStyles();
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      {data.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} className={classes.ProductList}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
