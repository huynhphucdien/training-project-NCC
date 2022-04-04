/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useRef, useState } from 'react';

const useStyles = makeStyles({
  search: {
    display: 'flex',
    alignItems: 'center',
    width: '20ch',
    padding: '8px',
    backgroundColor: 'rgb(244, 244, 244) !important',
  },
});

export default function FilterSearchProduct({ onChange, queryParams }) {
  const classes = useStyles();
  const typingTimeout = useRef(null);
  const [value, setValue] = useState(queryParams.search || '');

  useEffect(() => {
    if (!queryParams.search) {
      setValue('');
    }
  }, [queryParams.search]);
  const handleChange = (e) => {
    const values = e.target.value;
    if (values.length > 2 || values.length === 0) {
      // Clear timeout
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
      typingTimeout.current = setTimeout(() => {
        if (values.length === 0) {
          onChange(values);
          return;
        }
        const newValue = values.trim();
        if (newValue.length > 2) {
          onChange(newValue);
        }
      }, 600);
    }
    setValue(values);
  };

  return (
    <Paper component="div" elevation={2} className={classes.search}>
      <InputBase
        sx={{ ml: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        size="small"
        autoComplete="true"
        value={value}
        onChange={handleChange}
      />

      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
