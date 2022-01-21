/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHOP AO QUAN HPD
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
