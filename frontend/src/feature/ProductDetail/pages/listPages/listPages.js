/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable space-in-parens */
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from '../../../../API/productApi';
import ProductSkeleton from '../../components/productSkeleton';
// import ProductSkeleton from '../../components/productSkeleton';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '25%',
  },
  right: {
    flex: '1 1 0',
  },
}));
export default function ListPages() {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const length = 8;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll();
        console.log(data);
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid className={classes.left} item>
            <Paper elevation={0}>LEFT</Paper>
          </Grid>
          <Grid className={classes.right} item>
            <Paper elevation={0}>
              RIGHT
              {loading ? (
                <ProductSkeleton length={length} />
              ) : (
                <Typography>RIGHT</Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
