/* eslint-disable object-curly-newline */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

export default function FilterTypeProduct() {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select label="Loại sản phẩm">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
