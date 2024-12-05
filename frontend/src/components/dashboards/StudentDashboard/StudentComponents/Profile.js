import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  MenuItem,
  Chip,
  Grid,
} from '@mui/material';

const Profile = () => {
  const [value, setValue] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    phno: '',
    email: '',
    gender: '',
    college: '',
    education: '',
    specialization: '',
    yearOfPassing: '',
    skills: [],
    resumeLink: '',
    linkedinLink: '',
  });

  const [skillInput, setSkillInput] = useState('');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !userData.skills.includes(skillInput)) {
      setUserData({ ...userData, skills: [...userData.skills, skillInput.trim()] });
      setSkillInput('');
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setUserData({
      ...userData,
      skills: userData.skills.filter((skill) => skill !== skillToDelete),
    });
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, index) => currentYear - index);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      <Tabs value={value} onChange={handleTabChange} centered>
        <Tab label="Edit Profile" />
        <Tab label="Links" />
      </Tabs>

      <Box
        sx={{
          maxWidth: '1500px', // Increase form width
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        {value === 0 ? (
          <form onSubmit={handleProfileUpdate}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  name="phno"
                  value={userData.phno}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Gender"
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="College Name"
                  name="college"
                  value={userData.college}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Education"
                  name="education"
                  value={userData.education}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  <MenuItem value="bca">BCA</MenuItem>
                  <MenuItem value="bsc">BSc</MenuItem>
                  <MenuItem value="bcom">BCom</MenuItem>
                  <MenuItem value="be">BE</MenuItem>
                  <MenuItem value="bba">BBA</MenuItem>
                  <MenuItem value="mca">MCA</MenuItem>
                  <MenuItem value="mba">MBA</MenuItem>
                  <MenuItem value="mcom">MCom</MenuItem>
                  <MenuItem value="msw">MSW</MenuItem>
                  <MenuItem value="msc">MSc</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Year of Passing"
                  name="yearOfPassing"
                  value={userData.yearOfPassing}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                {/* Smaller specialization field */}
                <TextField
                  label="Specialization"
                  name="specialization"
                  value={userData.specialization}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" gap="10px" alignItems="center">
                  <TextField
                    label="Add Skill"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    fullWidth
                  />
                  <Button variant="contained" color="primary" onClick={handleAddSkill}>
                    Add
                  </Button>
                </Box>
                <Box display="flex" gap="8px" flexWrap="wrap" marginTop="10px">
                  {userData.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      onDelete={() => handleDeleteSkill(skill)}
                      color="primary"
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
            >
              Update Profile
            </Button>
          </form>
        ) : (
          <form onSubmit={handleProfileUpdate}>
            <Box display="flex" flexDirection="column" gap="16px">
              <TextField
                label="Resume Link"
                name="resumeLink"
                value={userData.resumeLink}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="LinkedIn Link"
                name="linkedinLink"
                value={userData.linkedinLink}
                onChange={handleChange}
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '10px' }}
              >
                Update Links
              </Button>
            </Box>
          </form>
        )}
      </Box>
    </div>
  );
};

export default Profile;
