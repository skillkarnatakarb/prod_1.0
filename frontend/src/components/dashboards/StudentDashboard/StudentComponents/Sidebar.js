import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Event as EventIcon,
  Assessment as AssessmentIcon,
  Upload as UploadIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Support as SupportIcon,
  Work as WorkIcon,
} from "@mui/icons-material";

const Sidebar = ({ setActiveMenu }) => {
  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "Upcoming Interviews", icon: <EventIcon /> },
    { label: "Take Assessments", icon: <AssessmentIcon /> },
    { label: "Upload Projects", icon: <UploadIcon /> },
    { label: "Profile", icon: <PersonIcon /> },
    { label: "Get Certified", icon: <SchoolIcon /> },
    { label: "Get Counseling", icon: <SupportIcon /> },
    { label: "Apply For Internships", icon: <WorkIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "#5559cd",
          color: "#ffffff",
        },
      }}
    >
      <div>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            padding: "20px",
            color: "#ffffff",
          }}
        >
          Student Dashboard
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => setActiveMenu(item.label)}
              sx={{
                "&:hover": {
                  backgroundColor: "#3e4a69",
                },
                "&.Mui-selected": {
                  backgroundColor: "#4e5d80",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#ffffff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
