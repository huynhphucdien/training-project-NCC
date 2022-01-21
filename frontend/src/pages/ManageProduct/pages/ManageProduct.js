/* eslint-disable import/no-cycle */
import { Box } from '@mui/material';
import React from 'react';
import ManageForm from '../components/AddProductForm/Form/ManageForm';

export default function ManageProduct() {
  return (
    <Box>
      <ManageForm />
    </Box>
  );
}
