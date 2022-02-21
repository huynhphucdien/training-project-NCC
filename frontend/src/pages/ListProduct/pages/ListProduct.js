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
import { Grid, Pagination, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
  filter: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 16px 16px',
    borderBottom: '1px solid #795548',
  },
  paper: {
    width: '100%',
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

  // console.log(queryParams);

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

    const newQueryParams = { ...queryParams };
    delete newQueryParams.productType;
    delete newQueryParams.productCategory;

    const exactFilters = typeId ? filters : newQueryParams;
    console.log(exactFilters);

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(exactFilters),
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
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <Box>
      <Grid container spacing={1} sx={{ pt: 2 }} className={classes.paper}>
        <Box className={classes.filter}>
          <FilterProduct
            queryParams={queryParams}
            onTypeChange={handleTypeChange}
            onCategoryChange={handleCategoryChange}
            onSearchChange={handleSearchChange}
          />
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
      </Grid>
    </Box>
  );
}
