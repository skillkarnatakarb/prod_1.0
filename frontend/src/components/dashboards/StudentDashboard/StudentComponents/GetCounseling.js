import React from 'react';
import { Button, Typography, Box, Grid, Card } from '@mui/material';

const GetCounseling = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: '20px', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            {/* Split Section: Psychometric Test and Buttons */}
            <Grid container spacing={2}>
              {/* Psychometric Test Card */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    padding: '20px',
                    borderRadius: '15px',
                    background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'left',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{ color: '#0D47A1', marginBottom: '10px' }}>
                    Psychometric Test
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', marginBottom: '15px' }}>
                    Take a psychometric test to understand your mental health and well-being.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: '15px',
                      padding: '6px 12px',
                      fontSize: '0.875rem',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Take Test
                  </Button>
                </Box>
              </Grid>

              {/* Counseling Options Buttons */}
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#2196F3',
                      borderRadius: '25px',
                      padding: '10px 20px',
                      textTransform: 'none',
                    }}
                    fullWidth
                  >
                    Online Chat Sessions
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#F50057',
                      borderRadius: '25px',
                      padding: '10px 20px',
                      textTransform: 'none',
                    }}
                    fullWidth
                  >
                    Book a Counseling Session
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#1E88E5',
                      borderRadius: '25px',
                      padding: '10px 20px',
                      textTransform: 'none',
                    }}
                    fullWidth
                  >
                    Face to Face Sessions
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* Care Plan Section */}
            <Box
              sx={{
                marginTop: '20px',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '15px',
                border: '1px solid #ddd',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Our Care Plan
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', marginBottom: '15px' }}>
                Get best-in-class professional guidance at affordable rates. Buy Our Care Plan now.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2">✔ 12+ Sessions</Typography>
                  <Typography variant="body2">✔ Measured Matching</Typography>
                  <Typography variant="body2">✔ Mood Journal</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">✔ Unlimited wellness content</Typography>
                  <Typography variant="body2">✔ Discussion Forum</Typography>
                  <Typography variant="body2">✔ Verified Experts</Typography>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '15px',
                }}
              >
                <Typography variant="h4" fontWeight="bold" color="primary">
                  $20/month
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: '15px',
                    padding: '6px 12px',
                    fontSize: '0.875rem',
                  }}
                >
                  Get Started Now
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          {/* Expert Chat Section */}
          <Card
            sx={{
              marginBottom: '20px',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Experts
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', marginBottom: '15px' }}>
              Begin your first session by connecting to experts right now.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '25px', padding: '10px 20px' }}
            >
              Chat Now
            </Button>
          </Card>

          {/* Illustration */}
          <Box sx={{ textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/350x250" // Replace with actual illustration image
              alt="Counseling Illustration"
              style={{ width: '100%', maxWidth: '350px', borderRadius: '15px' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetCounseling;
