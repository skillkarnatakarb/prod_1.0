import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = ({ toggleSidebar }) => (
  <AppBar position="static" style={{ backgroundColor: '#1976d2', color: 'white' }}>
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" style={{ fontWeight: 'bold' }}>Corporate Dashboard</Typography>
      <div>
        <IconButton color="inherit" onClick={toggleSidebar}>
          <AccountCircle />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
