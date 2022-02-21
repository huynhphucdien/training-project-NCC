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
  },
  left: {
    width: '50%',
  },
  right: {
    flex: '1',
    marginLeft: '8px !important',
    height: '500px',
  },
  paper: {
    height: '100%',
  },
}));
export default function DetailProduct() {
  const classes = useStyles();
  const [ProductDetail, setProductDetail] = useState([]);

  const [showLoading, hideLoading] = useLoading();

  const {
    params: { detailId },
  } = useRouteMatch();
  const getData = async () => {
    try {
      // setLoading(true);
      showLoading();
      const data = await productApi.get(detailId);
      if (data) {
        setProductDetail(data);
      }
      // setLoading(false);
      hideLoading();
    } catch (e) {
      console.log(e);
      // setLoading(false);
    }
    hideLoading();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Stack className={classes.main}>
      <Box>
        <Typography>
          Sản Phẩm/
          <Box component="span" ml={1}>
            <Link to="/danh-sach-san-pham">Danh sách sản phẩm</Link>
          </Box>
        </Typography>
      </Box>
      <Grid container spacing={1}>
        <Grid item className={classes.left}>
          <Paper className={classes.paper}>
            <DetailProductImage data={ProductDetail} />
          </Paper>
        </Grid>
        <Grid item className={classes.right}>
          <Paper elevation={0} className={classes.paper}>
            <DetailProductInfo data={ProductDetail} />
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}
