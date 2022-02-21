/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { TYPE_ID, CATEGORY_ID } from '../../../../components/Constants/common';
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
    alignItems: 'center',
    minHeight: '60px',
  },
});
export default function FilterProduct(props) {
  const { queryParams, onTypeChange, onCategoryChange, onSearchChange } = props;
  const classes = useStyles();
  const [productType, setProductType] = useState(TYPE_ID);

  const handleTypeChange = (typeId) => {
    setProductType(typeId);
    if (typeId === TYPE_ID) {
      onTypeChange(null);
      return;
    }
    onTypeChange(typeId);
  };
  const handleCategoryChange = (categoryId) => {
    if (categoryId === CATEGORY_ID) {
      onCategoryChange(null);
      return;
    }
    onCategoryChange(categoryId);
  };
  const handleSubmitSearch = (value) => {
    console.log('mainValue', value);
    if (value.length > 2) {
      onSearchChange(value);
      return;
    }
    if (value.length === 0) {
      onSearchChange(null);
    }
  };

  return (
    <Paper component="form" className={classes.filter}>
      <FilterTypeProduct queryParams={queryParams} onChange={handleTypeChange} />
      <FilterCategoryProduct
        queryParams={queryParams}
        productType={productType}
        onChange={handleCategoryChange}
      />
      <FilterSearchProduct onChange={handleSubmitSearch} />
    </Paper>
  );
}
