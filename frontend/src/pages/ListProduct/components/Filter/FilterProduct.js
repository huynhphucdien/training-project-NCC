/* eslint-disable no-unused-vars */
import { Box, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import FilterCategoryProduct from './FilterCategoryProduct';
import FilterSearchProduct from './FilterSearchProduct';
import FilterTypeProduct from './FilterTypeProduct';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  filter: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
});
export default function FilterProduct() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box>
        <Link to="danh-sach-san-pham">Sản Phẩm/ Danh sách dản phẩm</Link>
      </Box>
      <Box className={classes.filter}>
        <FilterTypeProduct />
        <FilterCategoryProduct />
        <FilterSearchProduct />
      </Box>
    </Box>
  );
}
