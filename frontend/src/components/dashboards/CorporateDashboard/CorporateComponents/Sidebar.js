import React from "react";
import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom"; // Updated from Link to NavLink for active styling

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: "250px",
      height: "119vh",
      background: "linear-gradient(to bottom, #4e73df, #1cc88a)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "20px",
    },
    brand: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
    },
    brandIcon: {
      fontSize: "36px",
      marginBottom: "5px",
    },
    brandName: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    link: {
      textDecoration: "none",
      color: "white",
      display: "flex",
      alignItems: "center",
      padding: "10px 20px",
      width: "100%",
      transition: "background 0.3s",
      borderRadius: "5px",
    },
    linkHover: {
      background: "rgba(255, 255, 255, 0.2)",
    },
    activeLink: {
      background: "rgba(255, 255, 255, 0.3)",
    },
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.brand}>
      <div style={styles.brandIcon}>
        <img
          src={`${process.env.PUBLIC_URL}/Assets/sklogo.png`}
          alt="SkillKarnataka"
          style={{ width: "50px", height: "50px" }}
        />

      </div>

        <div style={styles.brandName}>Skill Karnataka</div>
      </div>
      <List>
        <ListItem>
          <NavLink
            to="/corporate-dashboard/create-interview"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Create Interview
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/corporate-dashboard/schedule"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Schedule
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/corporate-dashboard/scheduled-interviews"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Scheduled Interviews
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/corporate-dashboard/view-results"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            View Results
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/corporate-dashboard/create-1:1"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Create 1:1 Interview
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/corporate-dashboard/repository"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Repository
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
