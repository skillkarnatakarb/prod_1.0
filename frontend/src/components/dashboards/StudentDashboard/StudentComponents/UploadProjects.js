import React, { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";
// import { fetchProjects, uploadProject } from "../../../../api/api";

const UploadProjects = () => {
  const [projects, setProjects] = useState([]); // State for storing projects
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    githubLink: "",
  });

  // Fetch projects on component mount
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
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
    e.preventDefault(); // Prevent page reload
    console.log("Upload button clicked!"); // Debugging log
    try {
      const newProject = await uploadProject(formData);
      setProjects([newProject, ...projects]); // Add the new project to the list
      setFormData({ title: "", description: "", githubLink: "" }); // Clear the form
    } catch (error) {
      console.error("Error uploading project:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Upload Your Project
      </Typography>
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
            rows={4}
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
            style={{ marginTop: "10px" }}
          >
            Upload Project
          </Button>
        </Box>
      </form>

      {/* Display uploaded projects */}
      <Typography variant="h6" gutterBottom>
        Uploaded Projects
      </Typography>
      <Box display="flex" flexDirection="column" gap="16px">
        {projects.map((project, index) => (
          <Card key={index} sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {project.description}
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                component="a"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none" }}
              >
                Visit GitHub Repository
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default UploadProjects;
