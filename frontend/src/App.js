import React, { useState, useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

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

import "./styles/corporate.css";

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const location = useLocation();

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

  // List of dashboard routes
  const dashboardRoutes = ["/student-dashboard", "/corporate-dashboard", "/college-dashboard"];
  const isDashboard = dashboardRoutes.some((route) => location.pathname.startsWith(route));

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
            backgroundImage: 'url(/beta/Assets/bglaunch.png)',
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
          <h1 style={{ marginBottom: '20px', fontSize: '2rem', color: '#FD9E0B', textAlign: 'center' }}>
            Inauguration by our <br /> Honorable Deputy Chief Minister <br /> Dr. D K ShivKumar
          </h1>
          {showButton && (
            <button
              onClick={handleVideoPlay}
              style={{
                padding: '12px 24px',
                fontSize: '1.2rem',
                backgroundColor: '#9A6108',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
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
          ></video>
        </div>
      )}

      {/* Main Application Content */}
      {!showPopup && (
        <>
          {!isDashboard && <Header />}
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                    }}
                  ></div>
                  <Section1 scrollToSection2={scrollToSection2} />
                  <Section2 ref={section2Ref} />
                  <VideoComponent />
                  <HorizontalVerticalTabs />
                  <VerificationTabs />
                  <ImageCard />
                  <Section3 />
                  <Section4 />
                  <Footer />
                </>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <Sidebar role="student" />
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/corporate-dashboard/*"
              element={
                <ProtectedRoute allowedRoles={["corporate"]}>
                  <Sidebar role="corporate" />
                  <CorporateDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/college-dashboard"
              element={
                <ProtectedRoute allowedRoles={["college"]}>
                  <Sidebar role="college" />
                  <CollegeDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
