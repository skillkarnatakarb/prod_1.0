import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  ToggleButtonGroup,
  ToggleButton,
  Select,
  MenuItem,
  Switch,
} from "@mui/material";

const ApplyForInternship = () => {
  const [alignment, setAlignment] = useState("fulltime");
  const [sortOption, setSortOption] = useState("newest");

  const handleAlignmentChange = (event, newAlignment) => {
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };

  const jobs = [
    {
      id: 1,
      company: "Maximoz Team",
      title: "Database Programmer",
      salary: "$14,000 - $25,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "London, England",
      type: "Remote",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      company: "Colo Colo Studios",
      title: "Intern Programmer",
      salary: "$14,000 - $25,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "London, England",
      type: "Remote",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      company: "Kitakita Crew Ltd.",
      title: "Frontend Programmer",
      salary: "$14,000 - $25,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "London, England",
      type: "Remote",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      company: "Madju Djaja Studios",
      title: "Backend Programmer",
      salary: "$14,000 - $25,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "London, England",
      type: "Remote",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      {/* Search and Filter Section */}
      <Box sx={{ marginBottom: "20px" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            variant="outlined"
            placeholder="Search by Title, Company, or any jobs keyword..."
            fullWidth
            sx={{ marginRight: "10px" }}
          />
          <Button variant="contained" color="primary">
            Find
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: "10px" }}>
          <Box>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignmentChange}
              aria-label="job type"
            >
              <ToggleButton value="fulltime">Fulltime</ToggleButton>
              <ToggleButton value="freelance">Freelance</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Typography>Sort by:</Typography>
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              sx={{ minWidth: "150px" }}
            >
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>

      {/* Job Cards Section */}
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card sx={{ borderRadius: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap="10px" sx={{ marginBottom: "10px" }}>
                  <Avatar src={job.avatar} alt={job.company} />
                  <Typography variant="h6" fontWeight="bold">
                    {job.company}
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight="bold" sx={{ marginBottom: "10px" }}>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "10px" }}>
                  {job.description}
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="primary" sx={{ marginBottom: "10px" }}>
                  {job.salary}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.type} - {job.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ApplyForInternship;
