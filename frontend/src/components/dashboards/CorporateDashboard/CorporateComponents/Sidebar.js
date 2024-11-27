import React from 'react';
import { Button, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div style={{ width: '200px', padding: '20px', backgroundColor: '#f4f4f4', height: '100vh' }}>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Dashboard</h2>
    <List>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard" variant="outlined" style={{ width: '100%', marginBottom: '10px' }}>
          Corporate
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard/calendar" variant="outlined" style={{ width: '100%', marginBottom: '10px' }}>
          Calendar
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard/domain-selection" variant="outlined" style={{ width: '100%', marginBottom: '10px' }}>
          Domain Selection
        </Button>
      </ListItem>
    </List>
  </div>
);

export default Sidebar;
