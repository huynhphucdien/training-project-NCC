/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import { Grid } from '@mui/material';
import React from 'react';
import Product from './Product';

export default function ProductList({ data }) {
  // const skeletonList = [];
  // for (let i = 0; i < length; i++) {
  //   skeletonList.push(i);
  // }
  // console.log(skeletonList)
  return (
    <Grid container>
      {data.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
