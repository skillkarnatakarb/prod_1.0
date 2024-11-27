import React from 'react';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';

const DashboardHeader = ({ user, onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#1976d2',
        color: 'white',
      }}
    >
      <h1>Skill Karnataka Dashboard</h1>
      <div>
        <IconButton onClick={handleMenuOpen}>
          <Avatar>{user?.name[0]}</Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>{user?.name}</MenuItem>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default DashboardHeader;
