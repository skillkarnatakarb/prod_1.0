import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth, p: 2 }}>
      <List>
        <ListItem button onClick={() => navigate("/profile")}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={() => navigate("/notifications")}>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button onClick={() => navigate("/settings")}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
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
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ padding: "0 16px", position: "relative", float: "right" }}>
          {/* Logo */}
          <Box
            component="img"
            src="/Assets/sklogo.png" // Replace with the correct logo file name
            alt="Logo"
            sx={{ height: 50, cursor: "pointer" }}
            onClick={() => navigate("/dashboard-home")}
          />
          {/* Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              position: "absolute",
              right: 16, // Ensures the hamburger icon is on the far right
            }}
          >
            <MenuIcon sx={{ fontSize: 30, color: "#000" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Right Sidebar Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
