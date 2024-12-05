import React from "react";
import { Button, List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom"; // Updated from Link to NavLink for active styling
import "../../../../styles/corporate.css";

import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    
    <List>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard/create-interview" variant="outlined">
          Create Interview
        </Button>
      </ListItem>

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
        <Button component={Link} to="/corporate-dashboard/view-results" variant="outlined">
          View Results
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard/create-1:1" variant="outlined">
          Create 1:1 Interview
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/corporate-dashboard/repository" variant="outlined">
          Repository
        </Button>
      </ListItem>
      
    </List>


  </div>
);

export default Sidebar;
