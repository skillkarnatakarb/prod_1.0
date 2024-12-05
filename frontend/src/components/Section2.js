import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';

// Sample data for the cards
const cardData = [
  {
    title: 'Student',
    description: 'Sign in or Sign up to apply for your Dream Jobs.',
    img: process.env.PUBLIC_URL + '/Assets/students.png',
    role: 'student',
  },
  {
    title: 'Corporate',
    description: 'Sign in or Sign up for your Hiring Needs.',
    img: process.env.PUBLIC_URL + '/Assets/corporate.png',
    role: 'corporate',
  },
  {
    title: 'College',
    description: 'Sign in or Sign up to access Campus Placement Details.',
    img: process.env.PUBLIC_URL + '/Assets/college.png',
    role: 'college',
  },
];

const Section2 = () => {
  const navigate = useNavigate();

  const handleNavigate = (type, role) => {
    navigate(`/${type}?role=${role}`);
  };

  return (
    <Box sx={{ p: 3, textAlign: 'center' ,fontWeight: 'bold'}}>
      <Typography variant="h4" gutterBottom>
        Choose Any One
      </Typography>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 5,
                boxShadow: 6,
                textAlign: 'center',
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '90%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  margin: '20px auto',
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="black">
                  {card.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    marginTop: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#6C63FF',
                      '&:hover': { backgroundColor: '#5A54CC' },
                    }}
                    onClick={() => handleNavigate('signin', card.role)}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#00C853',
                      '&:hover': { backgroundColor: '#009624' },
                    }}
                    onClick={() => handleNavigate('signup', card.role)}
                  >
                    Sign Up
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section2;
