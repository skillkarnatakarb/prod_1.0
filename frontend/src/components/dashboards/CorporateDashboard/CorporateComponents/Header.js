import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => (
  <AppBar position="static" style={{ backgroundColor: '#1976d2', color: 'white' }}>
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" style={{ fontWeight: 'bold' }}>Corporate Dashboard</Typography>
      <div>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
