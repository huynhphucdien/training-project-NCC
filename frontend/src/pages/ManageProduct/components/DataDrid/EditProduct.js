/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function EditProduct({ paramEdit, productData }) {
  const history = useHistory();
  const handleClick = () => {
    const rowId = paramEdit.row.id;
    const tableId = productData.filter((value, index) => index + 1 === rowId);
    return history.push(`/quan-ly-san-pham/${tableId.map((value) => value.id)}`);
    // history.push('/quan-ly-san-pham');
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        style={{ marginLeft: 8 }}
        onClick={handleClick}
      >
        Edit
      </Button>
    </>
  );
}
