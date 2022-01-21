/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable space-in-parens */
import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import productApi from '../../../api/productApi';
import useLoading from '../../../hooks/useLoading';
import DetailProductImage from '../components/DetailProductImage';
import DetailProductInfo from '../components/DetailProductInfo';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  left: {
    width: '45%',
  },
  right: {
    flex: '1 1 0',
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
      // hideLoading();
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
    <Box className={classes.root}>
      <Grid container spacing={1}>
        <Grid item className={classes.left}>
          <DetailProductImage data={ProductDetail} />
        </Grid>
        <Grid item className={classes.right}>
          <Paper elevation={0} className={classes.paper}>
            <DetailProductInfo data={ProductDetail} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
