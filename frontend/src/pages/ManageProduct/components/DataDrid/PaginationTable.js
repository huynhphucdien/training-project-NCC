/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Pagination } from '@mui/material';
import React from 'react';

export default function PaginationTable(props) {
  const { countTable, pageTable, onChangeTable } = props;
  return (
    <Pagination color="primary" count={countTable} page={pageTable} onChange={onChangeTable} />
  );
}
