import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './Menu.js';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Menu/>
          <Typography variant="h6" component="div" sx={{ flexGrow:1}}>React and MUI</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow:0}}>Гончаров Никита 4.106-1</Typography> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
/**/