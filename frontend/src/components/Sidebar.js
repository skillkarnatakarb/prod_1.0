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
  const [active, setActive] = useState(""); // To track the active button
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    setActive(""); // Clear active state on logout
    localStorage.clear();
    navigate("/");
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth, p: 2 }}>
      <List>
        {[
          { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
          { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
          { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
          { text: "Logout", icon: <LogoutIcon />, action: handleLogout },
        ].map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              setActive(item.text); // Set active item
              if (item.path) {
                navigate(item.path);
              } else if (item.action) {
                item.action();
              }
            }}
            sx={{
              backgroundColor: active === item.text ? "#f0f0f0" : "transparent", // Active background color
              "&:hover": {
                backgroundColor: active === item.text ? "#f0f0f0" : "#e0e0e0", // Hover behavior
              },
              borderRadius: "8px",
              mb: 1,
            }}
          >
            <ListItemIcon
              sx={{
                color: active === item.text ? "#1976d2" : "#000", // Active icon color
                fontSize: 30,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                color: active === item.text ? "#1976d2" : "#000", // Active text color
              }}
            />
          </ListItem>
        ))}
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
