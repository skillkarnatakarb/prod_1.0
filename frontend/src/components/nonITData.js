import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import HorizontalVerticalTabs from './components/HorizontalVerticalTabs';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <section id="section1">
        <Section1 />
      </section>

      {/* Image section using the img element */}
      <section
        style={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Assets/skill_logo.png`}
          alt="Descriptive Alt Text"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <style>
          {`
            @media (max-width: 768px) {
              img {
                height: 300px; /* Adjust height for mobile view if needed */
                object-fit: cover;
              }
            }
            @media (max-width: 1024px) {
              img {
                height: 500px; /* Adjust height for tablet view if needed */
                object-fit: cover;
              }
            }
          `}
        </style>
      </section>

      <section id="section2">
        <Section2 />
      </section>
      <section id="HorizontalVerticalTabssection">
        <HorizontalVerticalTabs />
      </section>
      <section id="section3">
        <Section3 />
      </section>

      {/* Another image section using the img element */}
      <section
        style={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Assets/partner3.png`}
          alt="Descriptive Alt Text"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <style>
          {`
            @media (max-width: 768px) {
              img {
                height: 300px; /* Adjust height for mobile view if needed */
                object-fit: cover;
              }
            }
            @media (max-width: 1024px) {
              img {
                height: 500px; /* Adjust height for tablet view if needed */
                object-fit: cover;
              }
            }
          `}
        </style>
      </section>

      <section id="section4">
        <Section4 />
      </section>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
