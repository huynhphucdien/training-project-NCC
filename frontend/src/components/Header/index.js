/* eslint-disable no-unused-vars */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#58b885 !important',
    paddingLeft: '24px',
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHOP AO QUAN HPD
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
