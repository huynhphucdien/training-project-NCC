/* eslint-disable no-unused-vars */
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
  },

  button: {
    width: '100%',
    margin: '8px auto !important',
    padding: '0 !important',
    flex: 1,
    '&:hover': {
      backgroundColor: '#1976d2 !important',
      color: '#fff !important',
      // padding: '10px 5px !important',
    },
  },
  link: {
    textDecoration: 'none',
    padding: '10px 5px',
    '&:active': {
      color: '#fff !important',
    },
    // color: '#fff',
  },
}));
export default function SideBar() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        <NavLink to="/danh-sach-san-pham" className={classes.link}>
          DANH SÁCH SẢN PHẨM
        </NavLink>
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        <NavLink to="/quan-ly-san-pham" className={classes.link}>
          QUẢN LÝ SẢN PHẨM
        </NavLink>
      </Button>
    </Box>
  );
}
