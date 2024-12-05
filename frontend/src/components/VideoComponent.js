import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

// Sample data for the 3 cards in VideoComponent
const cardData = [
  {
    name: 'Students',
    description: 'Ms. Jyothi (Jr. Software Engineer)',
    video: process.env.PUBLIC_URL + '/Assets/student.mp4', // Replace with actual video paths
  },
  {
    name: 'Corporates',
    description: 'Mr. Parshuram (Sr. HR - GlowTouch Tech.)',
    video: process.env.PUBLIC_URL + '/Assets/Corporate.mp4', // Replace with actual video paths
  },
  {
    name: 'Colleges',
    description: 'Mr. Rohith (VicePrincipal - Adichunchanagiri University)',
    video: process.env.PUBLIC_URL + '/Assets/Pricipal.mp4', // Replace with actual video paths

  },
  
];

function VideoComponent() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, textAlign: 'center', mb: 3, ml: 2, mr: 2 }}>
      <Typography variant="h4" gutterBottom>
        Reflections and Experiences
      </Typography>
      <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={8} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                boxShadow: 4,
                textAlign: 'center',
                borderRadius: '16px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
                padding: 0, // Removed padding to eliminate extra space
              }}
            >
              <video
                controls
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px 16px 0 0', // Rounded corners only at the top
                  objectFit: 'cover',
                }}
              >
                <source src={card.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 0', // Adjusted padding to eliminate extra space
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {card.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default VideoComponent;
