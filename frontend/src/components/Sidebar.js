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
            <AccountCircleIcon sx={{ color: "#000", fontSize: 30 }} />
          </ListItemIcon>
          <ListItemText primary="Profile" sx={{ color: "#000" }} />
        </ListItem>
        <ListItem button onClick={() => navigate("/notifications")}>
          <ListItemIcon>
            <NotificationsIcon sx={{ color: "#000", fontSize: 30 }} />
          </ListItemIcon>
          <ListItemText primary="Notifications" sx={{ color: "#000" }} />
        </ListItem>
        <ListItem button onClick={() => navigate("/settings")}>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "#000", fontSize: 30 }} />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={{ color: "#000" }} />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "#000", fontSize: 30 }} />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: "#000" }} />
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
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="/Assets/amazon.png" // Correct path
            alt="Logo"
            sx={{
              height: 50, // Adjust height if needed
              width: "auto", // Preserve aspect ratio
              cursor: "pointer",
              display: "block",
              backgroundColor: "#ddd",
            }}
            onClick={() => navigate("/corporate-dashboard/schedule")}
          />


          {/* Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              fontSize: 30,
              color: "#000",
            }}
          >
            <MenuIcon />
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
