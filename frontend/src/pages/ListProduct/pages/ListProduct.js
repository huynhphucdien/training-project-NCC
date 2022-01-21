/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable space-in-parens */
import { Grid, Pagination, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import FilterProduct from '../components/Filter/FilterProduct';
import ProductList from '../components/ProductList';
import ProductSkeleton from '../components/ProductSkeleton';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '20px',
    paddingBottom: '20px',
    width: '100%',
  },
}));
export default function ListProduct() {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const length = 8;

  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getAll();
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <Box className={classes.root}>
      <Grid container spacing={1}>
        <Paper elevation={0}>
          <Box>
            <FilterProduct />
          </Box>
          {loading ? (
            <ProductSkeleton length={length} />
          ) : (
            <ProductList data={productList} />
          )}
        </Paper>
        <Box className={classes.pagination}>
          <Pagination color="primary" count={8} shape="rounded"></Pagination>
        </Box>
      </Grid>
    </Box>
  );
}
