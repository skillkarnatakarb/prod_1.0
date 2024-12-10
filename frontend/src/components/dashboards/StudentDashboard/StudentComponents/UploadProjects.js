import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { fetchProjects, uploadProject, deleteProject } from "../../../../api/api";




const UploadProjects = () => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    githubLink: "",
  });
  const [error, setError] = useState(null); // State to handle errors
  const [success, setSuccess] = useState(false); // State to display success messages
  const [popupData, setPopupData] = useState(null); // State for popup data

  // Fetch projects on component mount
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects(); // Fetch projects from API
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again.");
      }
    };
    loadProjects();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const newProject = await uploadProject(formData); // Call API
      setProjects([newProject, ...projects]);
      setFormData({ title: "", description: "", githubLink: "" });
      setSuccess(true);
    } catch (error) {
      console.error("Upload Error:", error.response || error.message); // Debug error
      setError("Failed to upload project. Please try again.");
    }
  };

  // Handle delete project
  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId); // Call API to delete
      setProjects(projects.filter((project) => project._id !== projectId)); // Remove from state
      setError(null);
    } catch (error) {
      console.error("Error deleting project:", error.response || error.message);
      setError("Failed to delete project. Please try again.");
    }
  };

  // Handle Read More link click
  const handleReadMore = (project) => {
    setPopupData(project);
  };

  // Handle popup close
  const handleClosePopup = () => {
    setPopupData(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Upload Your Project
      </Typography>

      {/* Success and Error Messages */}
      {success && <Alert severity="success">Project uploaded successfully!</Alert>}
      {error && <Alert severity="error">{error}</Alert>}

      {/* Form for project upload */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <Box display="flex" flexDirection="column" gap="16px">
          <TextField
            label="Project Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Project Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            required
          />
          <TextField
            label="GitHub Link"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "10px" }}
          >
            Upload Project
          </Button>
        </Box>
      </form>

      {/* Display uploaded projects */}
      <Typography variant="h6" gutterBottom>
        Uploaded Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginTop: "10px",
                  }}
                  onClick={() => handleReadMore(project)}
                >
                  Read more
                </Typography>
                <Box display="flex" justifyContent="center" marginTop="10px">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    View
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleDelete(project._id)}
                    sx={{ marginLeft: "10px" }}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popup for Read More */}
      <Dialog open={Boolean(popupData)} onClose={handleClosePopup}>
        <DialogTitle>{popupData?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            {popupData?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UploadProjects;
