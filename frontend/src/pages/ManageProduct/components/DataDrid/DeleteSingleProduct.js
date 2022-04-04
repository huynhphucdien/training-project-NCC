/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import { Box, Button, Popover, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  },
  btnYes: {
    padding: '0 10px',
  },
});

export default function DeleteSingleProduct(props) {
  const classes = useStyles();
  const { productData, params, pagination, deleteSingleProduct } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDelete = () => {
    const rowId = params.row.id;
    const tableId = productData.filter((value, index) => pagination + index + 1 === rowId);
    deleteSingleProduct(tableId.map((value) => value.id));
    setAnchorEl(null);
  };
  const handleReject = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        style={{ marginLeft: 8 }}
        onClick={handleClick}
      >
        Del
      </Button>
      <Popover
        // id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>Do you want to delete this product?</Typography>
        <Box className={classes.btn}>
          <Box className={classes.btnYes}>
            <Button variant="outlined" color="error" onClick={handleDelete}>
              Yes
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" color="success" onClick={handleReject}>
              No
            </Button>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}
