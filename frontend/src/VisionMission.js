import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

function VisionMission() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '90%',
        height: '100%',
      }}
    >
      {/* Left Side - Vision */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#fff000', // Yellow background
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 ,mt:3}}>
          Vision 2024 - 2025
        </Typography>
       < Typography variant="h4" sx={{  mb: 2,mt:3}}>
          5000 ಕನ್ನಡಿಗರಿಗೆ Job Guarantee
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 ,mt:3}}>
          Job Domains
        </Typography>
        
        <Grid container spacing={1} justifyContent="center">
          {['IT / ITES', 'Commerce', 'Health Care', 'Hospitality', 'Gig Economy', 'Manufacturing'].map((text) => (
            <Grid item key={text}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: 5,
                  boxShadow: 1,
                  textTransform: 'none',
                  fontSize: 14,
                  m: 0.5,

                }}
              >
                {text}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Right Side - Mission */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#ec2026', // Red background
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 14,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, }}>
          Mission 2024 - 2025
        </Typography>
        <Typography variant="h4" sx={{ mb: 2,justifyContent:'center',mt:3,textAlign:'center' }}>
         10000 ಕನ್ನಡಿಗರಿಗೆ  {/*Skill Development Scheme */}ಕೌಶಲ್ಯ ಅಭಿವೃದ್ದಿ ಯೋಜನೆ
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Future Skills Development
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {[
            'Cyber Security',
            'Blockchain',
            'AI/MI',
            'Data Science',
            'Software Testing',
            'Full Stack Web Development',
          ].map((text) => (
            <Grid item key={text}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: 5,
                  boxShadow: 2,
                  textTransform: 'none',
                  fontSize: 14,
                  m: 0.5,
                }}
              >
                {text}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default VisionMission;
