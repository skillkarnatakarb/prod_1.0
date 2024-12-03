import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, TextField, Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const CenteredContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px',
});

const VerificationContainer = styled(Box)({
  position: 'relative',
  backgroundColor: '#FFDD44',
  color: '#333',
  padding: '80px 30px',
  borderRadius: '15px',
  width: '100%',
  maxWidth: '1000px',
  textAlign: 'center',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  marginTop: '30px',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  overflow: 'hidden',
});

const KarnatakaMapBackground = styled(Box)({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  opacity: '0.2',
  zIndex: '1',
  backgroundImage: 'url(https://images.unsplash.com/photo-1657856855186-7cf4909a4f78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // External image URL
});

const ContentContainer = styled(Box)({
  position: 'relative',
  zIndex: '2',
  padding: '20px',
  backgroundColor: 'rgba(255, 221, 68, 0.9)', // Semi-transparent background to enhance readability
  borderRadius: '10px',
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#D52B1E',
  borderRadius: '8px',
});

const StyledTab = styled(Tab)({
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#FFDD44',
  '&.Mui-selected': {
    color: '#333',
  },
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const CertificateValidation = () => (
  <Box>
    <TextField
      variant="outlined"
      placeholder="Enter Certificate ID"
      fullWidth
      sx={{
        marginBottom: 2,
        backgroundColor: '#fff',
        borderRadius: '8px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#D52B1E',
          },
          '&:hover fieldset': {
            borderColor: '#FFDD44',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#D52B1E',
          },
        },
      }}
    />
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: '#D52B1E',
        color: '#FFDD44',
        fontWeight: 'bold',
        padding: '12px',
        marginBottom: '15px',
        borderRadius: '8px',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#b71c1c',
        },
      }}
    >
      Verify Certificate
    </Button>
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: '#D52B1E',
        color: '#FFDD44',
        fontWeight: 'bold',
        padding: '12px',
        borderRadius: '8px',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#b71c1c',
        },
      }}
    >
      Connect to MetaMask
    </Button>
  </Box>
);

const PartnerValidation = () => (
  <Box>
    <TextField
      variant="outlined"
      placeholder="Enter Partner ID"
      fullWidth
      sx={{
        marginBottom: 2,
        backgroundColor: '#fff',
        borderRadius: '8px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#D52B1E',
          },
          '&:hover fieldset': {
            borderColor: '#FFDD44',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#D52B1E',
          },
        },
      }}
    />
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: '#D52B1E',
        color: '#FFDD44',
        fontWeight: 'bold',
        padding: '12px',
        borderRadius: '8px',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#b71c1c',
        },
      }}
    >
      Verify Partner
    </Button>
  </Box>
);

const VerificationTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CenteredContainer>
      <VerificationContainer>
        <KarnatakaMapBackground />
        <ContentContainer>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#000' }}>
            Certificate Verification On Blockchain (Bitcoin)
          </Typography>
          <StyledAppBar position="static">
            <Tabs value={value} onChange={handleChange} variant="fullWidth" textColor="inherit">
              <StyledTab label="Certificate Validation" />
              <StyledTab label="Learning Partner Validation" />
            </Tabs>
          </StyledAppBar>
          <TabPanel value={value} index={0}>
            <CertificateValidation />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PartnerValidation />
          </TabPanel>
        </ContentContainer>
      </VerificationContainer>
    </CenteredContainer>
  );
};

export default VerificationTabs;
