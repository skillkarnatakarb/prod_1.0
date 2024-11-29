import React, { useState, useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import HorizontalVerticalTabs from './components/HorizontalVerticalTabs';
import VerificationTabs from './components/VerificationTabs';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import VideoComponent from './components/VideoComponent';

// Authentication and Dashboard Components
import Signin from './components/Signin';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import StudentDashboard from './components/dashboards/StudentDashboard/StudentDashboard';
import CorporateDashboard from './components/dashboards/CorporateDashboard/CorporateDashboard';
import CollegeDashboard from './components/dashboards/CollegeDashboard/CollegeDashboard';
import Sidebar from './components/Sidebar';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // Refs for smooth scrolling
  const section2Ref = useRef(null);

  // Video handling functions
  const handleVideoPlay = () => {
    setShowButton(false);
    const video = document.getElementById('curtainVideo');
    video.style.display = 'block';
    video.play();
  };

  const handleVideoEnd = () => {
    setShowPopup(false);
  };

  // Smooth scrolling function
  const scrollToSection2 = () => {
    section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Curtain Raiser Popup */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage:'/beta/Assets/bglaunch.png',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#fff',
          }}
        >

          <h1 style={{ marginBottom: '20px', fontSize: '2rem', color: 'yellow' }}>
            LAUNCH OF SKILL KARNATAKA
            </h1>
            <p style={{ textAlign: 'center', color: 'white' }}>An Initiative By "RankBook"</p>
            <p style={{ textAlign: 'center', color: 'yellow' }}>(Your Skilling & Hiring Partner)</p>

          <h1 style={{ marginBottom: '20px', fontSize: '2rem',color:'#FD9E0B', textAlign: 'center' }}>LAUNCH OF SKILL KARNATAKA  <p style={{ textAlign: 'center', color:'#9A6108' }}>Inauguration by our <br></br>Honorable Deputy Chief Minister <br></br>Dr. D K ShivKumar</p>


          </h1>
          {showButton && (
            

            <button
              onClick={handleVideoPlay}
              style={{
                padding: '12px 24px',
                fontSize: '1.2rem',
                backgroundColor: '#9A6108', // Button color
                color: '#fff',
                border: 'none',
                borderRadius: '12px', // Rounded corners
                cursor: 'pointer',
                fontWeight: 'bold',
                width: 'fit-content', // Ensures button width adjusts to content
                margin: '0 auto', // Center alignment (if needed within a container)
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                textAlign: 'center', // Centers text inside the button
                transition: 'all 0.3s ease-in-out', // Smooth hover effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#B47E26'; // Slight hover effect
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#9A6108'; // Revert to original
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Grand Launch
            </button>





          )}
          <video
            id="curtainVideo"
            style={{ marginTop: '20px', width: '80%', borderRadius: '10px', display: 'none' }}
            src={`${process.env.PUBLIC_URL}/Assets/launch.mp4`}
            onEnded={handleVideoEnd}
            controls={false}
            autoPlay={false}
          >
          </video>
        </div>
      )}

      {/* Main Application Content */}
      {!showPopup && (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Background Image */}
                  <div
                    className="responsive-image-container"
                    style={{
                      width: '94%',
                      height: '300px',
                      backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/visionmision.png)`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      margin: '20px auto',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <style>
                      {`
                        @media (max-width: 768px) {
                          .responsive-image-container {
                            width: 100%;
                            height: 250px;
                          }
                        }
                        @media (max-width: 400px) {
                          .responsive-image-container {
                            height: 200px;
                          }
                        }
                      `}
                    </style>
                  </div>

                  {/* Sections */}
                  <section id="section1">
                    <Section1 scrollToSection2={scrollToSection2} />
                  </section>

                  <section id="section2" ref={section2Ref}>
                    <Section2 />
                  </section>

                  <section id="VideoComponent">
                    <VideoComponent />
                  </section>

                  <section id="HorizontalVerticalTabssection">
                    <HorizontalVerticalTabs />
                  </section>

                  <section id="VerificationTabs">
                    <VerificationTabs />
                  </section>

                  <section id="ImageCard">
                    <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
                      <ImageCard />
                    </div>
                  </section>

                  <section id="section3">
                    <Section3 />
                  </section>

                  <section id="section4">
                    <Section4 />
                  </section>

                  <Footer />
                </>
              }
            />

            {/* Authentication Routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />

            {/* Protected Routes */}
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute role="student">
                  <StudentDashboard />
                  <Sidebar />
                </ProtectedRoute>
              }
            />

            <Route
              path="/corporate-dashboard"
              element={
                <ProtectedRoute role="corporate">
                  <CorporateDashboard />
                  <Sidebar />
                </ProtectedRoute>
              }
            />

            <Route
              path="/college-dashboard"
              element={
                <ProtectedRoute role="college">
                  <CollegeDashboard />
                  <Sidebar />
                </ProtectedRoute>
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
