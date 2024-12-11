import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './CorporateComponents/Sidebar';

import MainContent from './CorporateComponents/MainContent';
import DomainSelection from './CorporateComponents/DomainSelection';
import ViewResults from './CorporateComponents/ViewResults';
import CreateOneOnOne from './CorporateComponents/CreateOneOnOne';
import Repository from './CorporateComponents/Repository';

import Corporate_profile from './CorporateComponents/Corporate_profile';
import Notification from './CorporateComponents/Notification';
import Settings from './CorporateComponents/Settings';



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from './CorporateComponents/ContactUs';






const CorporateDashboard = () => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar />
    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      
      <main className="main-content">
      <Routes>
            <Route path="/" element={<Navigate to="/corporate-dashboard/schedule" />} />
            <Route path="schedule" element={<MainContent currentTab="schedule" />} />
            <Route path="scheduled-interviews" element={<MainContent currentTab="scheduled-interviews" />} />
            <Route path="create-interview" element={<DomainSelection />} />

            <Route path="view-results" element={ <ViewResults /> } />

            <Route path="create-1:1" element={<CreateOneOnOne />} />

            <Route path="repository" element={<Repository />} />

            
            <Route path="Corporate_profile" element={<Corporate_profile />} />
            <Route path="Notification" element={<Notification />} />
            <Route path="Settings" element={<Settings />} />

            <Route path="ContactUs" element={<ContactUs />} />


      </Routes>

        <ToastContainer />
      </main>
    </div>
  </div>
);

export default CorporateDashboard;
