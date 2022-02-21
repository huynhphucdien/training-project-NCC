/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useRef } from 'react';

const useStyles = makeStyles({
  search: {
    display: 'flex',
    alignItems: 'center',
    width: '20ch',
    padding: '8px',
  },
});

export default function FilterSearchProduct({ onChange }) {
  const classes = useStyles();
  const typingTimeout = useRef(null);

  const handleChange = (e) => {
    const values = e.target.value;
    // Clear timeout
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    typingTimeout.current = setTimeout(() => {
      onChange(values);
    }, 600);
  };

  return (
    <Paper component="div" elevation={2} className={classes.search}>
      <InputBase
        sx={{ ml: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        size="small"
        onChange={handleChange}
      />

      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
