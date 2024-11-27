import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Jobs', link: '#HorizontalVerticalTabssection' },
    { text: 'Interviews', link: '#section1' },
    { text: 'Certificate', link: '#VerificationTabs' },
    { text: 'SignUp/Login', link: '#section2' },
    // { text: 'Login', link: '#section2' }
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: '100%',
          backgroundColor: 'white',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          padding: { xs: '0 10px', sm: '0 20px', md: '0 40px' },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {/* Logo on the Left */}
          <Box
            component={HashLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              flex: { xs: '1 1 auto', md: '0 0 auto' },
            }}
          >
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/Assets/sklogo.png`}
              alt="Logo"
              sx={{
                height: { xs: 50, sm: 60, md: 60 },
                marginLeft: { xs: 2, md: -5 },
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              marginLeft: 'auto',
              flex: '0 0 auto',
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={HashLink}
                to={item.link}
                smooth
                sx={{
                  color: '#192661',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
                onClick={() => setDrawerOpen(false)}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Menu Icon for Mobile - Positioned to the Right */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'block', md: 'none' },
              color: '#000',
              marginLeft: 'auto', // This ensures the icon is on the right
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: '40%', backgroundColor: 'white', height: '100%' },
        }}
      >
        {/* Close Icon */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#000' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} sx={{ justifyContent: 'center' }}>
              <ListItemText
                primary={
                  <HashLink
                    to={item.link}
                    smooth
                    style={{ textDecoration: 'none', color: '#192661', fontWeight: 'bold' }}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.text}
                  </HashLink>
                }
                sx={{ textAlign: 'center' }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
