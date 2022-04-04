/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable space-in-parens */
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import productApi from '../../../api/productApi';
import useLoading from '../../../hooks/useLoading';
import DetailProductInfo from '../components/DetailProduct/DetailProductInfo';
import DetailProductImage from '../components/DetailProduct/DetailProductImage';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  paper: {
    height: '500px !important',
  },
  link: {
    textDecoration: 'none',
    fontWeight: '600',
    color: '#1976d2',
  },
}));
export default function DetailProduct() {
  const classes = useStyles();
  const [ProductDetail, setProductDetail] = useState([]);

  const [showLoading, hideLoading] = useLoading();

  const {
    params: { id },
  } = useRouteMatch();
  const getData = async () => {
    try {
      // setLoading(true);
      showLoading();
      const data = await productApi.get(id);
      if (data) {
        setProductDetail(data);
      }
      // setLoading(false);
      hideLoading();
    } catch (e) {
      console.log(e);
      // setLoading(false);
      hideLoading();
    }
    hideLoading();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Stack className={classes.main}>
      <Box>
        <Typography sx={{ pt: 2, pb: 1, pl: 1 }}>
          <Link to="/danh-sach-san-pham" className={classes.link}>
            Sản Phẩm
          </Link>
          <Box component="span" ml={1}>
            {'>>'} Chi Tiết Sản Phẩm
          </Box>
        </Typography>
      </Box>
      <Grid container columnSpacing={2.5} spacing={1}>
        <Grid item lg={6}>
          <Paper className={classes.paper}>
            <DetailProductImage data={ProductDetail} />
          </Paper>
        </Grid>
        <Grid item lg={6}>
          <Paper elevation={0} className={classes.paper}>
            <DetailProductInfo data={ProductDetail} />
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}
