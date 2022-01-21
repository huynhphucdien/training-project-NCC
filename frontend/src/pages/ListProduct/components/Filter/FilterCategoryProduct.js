import { Box, MenuItem, Select } from '@mui/material';
import React from 'react';

export default function FilterCategoryProduct() {
  return (
    <Box>
      <Select label="Danh mục sản phẩm">
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
    </Box>
  );
}
