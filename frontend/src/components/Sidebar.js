import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactMailIcon from "@mui/icons-material/ContactMail"; // Import ContactMailIcon
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = ({ role }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = {
    student: [
      { text: "Student Profile", path: "/student-dashboard/Student_profile", icon: <AccountCircleIcon /> },
      { text: "Notification", path: "/student-dashboard/Notification", icon: <NotificationsIcon /> },
      { text: "Settings", path: "/student-dashboard/Settings", icon: <SettingsIcon /> },
      { text: "Contact Us", path: "/student-dashboard/ContactUs", icon: <ContactMailIcon /> },
    ],
    corporate: [
      { text: "Corporate Profile", path: "/corporate-dashboard/Corporate_profile", icon: <AccountCircleIcon /> },
      { text: "Notification", path: "/corporate-dashboard/Notification", icon: <NotificationsIcon /> },
      { text: "Settings", path: "/corporate-dashboard/Settings", icon: <SettingsIcon /> },
      { text: "Contact Us", path: "/corporate-dashboard/ContactUs", icon: <ContactMailIcon /> },
    ],
    college: [
      { text: "College Profile", path: "/college-dashboard/College_profile", icon: <AccountCircleIcon /> },
      { text: "Notification", path: "/college-dashboard/Notification", icon: <NotificationsIcon /> },
      { text: "Settings", path: "/college-dashboard/Settings", icon: <SettingsIcon /> },
      { text: "Contact Us", path: "/college-dashboard/ContactUs", icon: <ContactMailIcon /> },
    ],
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth, p: 2 }}>
      {/* Profile Section */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar alt={role} sx={{ mr: 2 }}>
          {role.charAt(0).toUpperCase()}
        </Avatar>
        <Box>
          <strong>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</strong>
        </Box>
      </Box>

      {/* Menu Items */}
      <List>
        {menuItems[role]?.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => navigate(item.path)}
            sx={{
              mb: 1,
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={handleLogout}
          sx={{ mt: 2, borderRadius: "8px", backgroundColor: "#f0f0f0" }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Header */}
      <Box
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#1976d2",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        {/* Dashboard Title */}
        <Box sx={{ fontWeight: "bold", fontSize: "18px", color: "#fff" }}>
          {role.toUpperCase()} DASHBOARD
        </Box>

        {/* Menu Icon */}
        <Box sx={{ marginLeft: "auto" }}>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{
              fontSize: 30,
              color: "#fff",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
