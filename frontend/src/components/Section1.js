import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import companies from './companiesSect1'; // Import the combined companies array

function Section1({ scrollToSection2 }) {
  return (
    <Box
      sx={{
        p: 2,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 2,
        ml: 4,
        mr: 4,
        mt: 2,
        mb: 3,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h5"
        marginTop={-1}
        gutterBottom
        sx={{ color: 'black', fontWeight: 'bold', fontSize: '1.2rem' }}
      >
        UPCOMING INTERVIEWS
      </Typography>
      <Box sx={{ maxHeight: '150px', overflowY: 'auto', padding: 1 }}>
        <Grid container spacing={2}>
          {companies.map((company) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={company.id}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  borderRadius: '8px',
                  border: '1px solid #000',
                  backgroundColor: company.id < 6 ? '#fffee0' : 'white',
                  padding: '8px',
                  boxSizing: 'border-box',
                  boxShadow: 4,
                  '&:hover': {
                    borderColor: '#e51d1d',
                    backgroundColor: '#7ed957',
                  },
                }}
              >
                <Button
                  variant="outlined"
                  onClick={scrollToSection2}
                  sx={{
                    borderRadius: '8px',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    cursor: 'default',
                  }}
                  disableRipple
                >
                  <img
                    src={company.image}
                    alt={`${company.name} logo`}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      borderRadius: '4px',
                      marginRight: '10px',
                    }}
                  />
                  <Box textAlign="left">
                    <Typography
                      variant="body1"
                      sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#000', fontSize: '0.9rem' }}
                    >
                      {company.jobRole}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#555', fontSize: '0.8rem' }}>
                      {company.date}
                    </Typography>
                  </Box>
                </Button>
                
                {/* Blue Button-like Text Box */}
                <Box
                  sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    textAlign: 'center',
                    padding: '4px 0',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '8px',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                  }}
                  onClick={scrollToSection2} // Optional: Attach the scroll function
                >
                  Attend Interview
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Section1;
