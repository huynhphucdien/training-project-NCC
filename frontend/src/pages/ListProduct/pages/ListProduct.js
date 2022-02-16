/* eslint-disable object-curly-newline */
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
import useLoading from '../../../hooks/useLoading';
import FilterProduct from '../components/Filter/FilterProduct';
import ProductList from '../components/ProductList';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '20px',
    paddingBottom: '20px',
    width: '100%',
  },
  filterProduct: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 16px',
  },
}));
export default function ListProduct() {
  const classes = useStyles();
  const [showLoading, hideLoading] = useLoading();
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 12,
  });

  const [filter, setFilter] = useState({ page: 1, limit: 12 });

  const getApi = async () => {
    try {
      // setLoading(true);
      showLoading();
      const { product, total, limit, page } = await productApi.getAll(filter);
      if (product) {
        setProductList(product);
        setPagination({ total, limit, page });
      }
      // setLoading(false);
      hideLoading();
    } catch (e) {
      // setLoading(false);
      showLoading();
    }
  };
  useEffect(() => {
    getApi();
  }, [filter]);

  const handlePageChange = (e, page) => {
    setFilter((prev) => ({
      ...prev,
      page,
    }));
  };

  return (
    <Box>
      <Grid container spacing={1}>
        <Paper elevation={0} sx={{ pt: 2 }}>
          <Box className={classes.filterProduct}>
            <FilterProduct />
          </Box>
          <ProductList data={productList} />
          <Box className={classes.pagination}>
            <Pagination
              color="primary"
              count={Math.ceil(pagination.total / pagination.limit)}
              page={pagination.page}
              shape="rounded"
              onChange={handlePageChange}
            ></Pagination>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
}
