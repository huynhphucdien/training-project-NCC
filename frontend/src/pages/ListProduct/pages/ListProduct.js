/* eslint-disable indent */
/* eslint-disable radix */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable space-in-parens */
import { Grid, Pagination, Paper, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import productApi from '../../../api/productApi';
import useLoading from '../../../hooks/useLoading';
import FilterProduct from '../components/Filter/FilterProduct';
import ProductList from '../components/ProductList';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    margin: '20px auto 30px',
    width: '100%',
  },
  filter: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 16px',
  },
  paper: {
    width: '100%',
    margin: '10px 0 20px',
    backgroundColor: 'rgb(244, 244, 244) !important',
  },
  mainFilter: {
    flexDirection: 'row !important',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    fontWeight: '600',
    color: '#1976d2',
  },
}));
export default function ListProduct() {
  const classes = useStyles();
  // Queries
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const queries = queryString.parse(location.search);
    return {
      ...queries,
      limit: Number.parseInt(queries.limit) || 12,
      page: Number.parseInt(queries.page) || 1,
    };
  }, [location]);
  // useState
  const [showLoading, hideLoading] = useLoading();
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 12,
  });

  const getApi = async () => {
    try {
      // setLoading(true);
      showLoading();
      const { product, total, limit, page } = await productApi.getAll(queryParams);
      if (product) {
        setProductList(product);
        setPagination({ total, limit, page });
      }
      // setLoading(false);
      hideLoading();
    } catch (e) {
      console.log('error:', e);
      // setLoading(false);
    }
    hideLoading();
  };
  useEffect(() => {
    getApi();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  // Filter by type
  const handleTypeChange = (typeId) => {
    const filters = {
      ...queryParams,
      productType: typeId,
      page: 1,
    };
    delete filters.productCategory;

    const newQueryParams = { ...queryParams };
    delete newQueryParams.productType;
    delete newQueryParams.productCategory;

    const newFilters = typeId ? filters : newQueryParams;

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  // Filter by category
  const handleCategoryChange = (categoryId) => {
    const filters = {
      ...queryParams,
      productCategory: categoryId,
      page: 1,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  // Filter by search
  const handleSearchChange = (values) => {
    const filters = {
      ...queryParams,
      search: values,
      page: 1,
    };
    const newQueryParams = { ...queryParams };
    delete newQueryParams.search;
    const newFilters = values.length > 2 ? filters : newQueryParams;
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  return (
    <Box>
      <Paper className={classes.paper}>
        <Stack className={classes.mainFilter}>
          <Typography component="div" padding={1}>
            <Link to="/danh-sach-san-pham" className={classes.link}>
              Sản Phẩm
            </Link>
            <Box component="span" ml={1}>
              {'>>'} Danh sách sản phẩm
            </Box>
          </Typography>
          <Box className={classes.filter}>
            <FilterProduct
              queryParams={queryParams}
              onTypeChange={handleTypeChange}
              onCategoryChange={handleCategoryChange}
              onSearchChange={handleSearchChange}
            />
          </Box>
        </Stack>
      </Paper>
      <Grid container>
        <ProductList data={productList} />
      </Grid>
      <Box className={classes.pagination}>
        <Pagination
          color="primary"
          count={Math.ceil(pagination.total / pagination.limit)}
          page={pagination.page}
          shape="rounded"
          onChange={handlePageChange}
        ></Pagination>
      </Box>
    </Box>
  );
}
