import React from "react";
import { Button, List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom"; // Updated from Link to NavLink for active styling
import "../../../../styles/corporate.css";

import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <h2>Dashboard</h2>
    
    <List>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard/schedule" variant="outlined">
          Schedule
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard/scheduled-interviews" variant="outlined">
          Scheduled Interviews
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard/domain-selection" variant="outlined">
          Domain Selection
        </Button>
      </ListItem>
    </List>


  </div>
);

export default Sidebar;
