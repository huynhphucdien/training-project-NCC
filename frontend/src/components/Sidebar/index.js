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
    flex: 1,
  },
  link: {
    textDecoration: 'none',
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

// /* eslint-disable react/prop-types */
// import { Box, Menu, MenuItem } from '@mui/material';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function SideBar() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <Box>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Link to="/danh-sach-san-pham">Danh sách sản phẩm</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link to="/quan-ly-san-pham">Quản lý sản phẩm</Link>
//         </MenuItem>
//       </Menu>
//     </Box>
//   );
// }

// export default SideBar;
