import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './CorporateComponents/Sidebar';
import Header from './CorporateComponents/Header';
import MainContent from './CorporateComponents/MainContent';
import DomainSelection from './CorporateComponents/DomainSelection';
import ViewResults from './CorporateComponents/ViewResults';
import CreateOneOnOne from './CorporateComponents/CreateOneOnOne';
import Repository from './CorporateComponents/Repository';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const CorporateDashboard = () => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar />
    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className="main-content">
      <Routes>
            <Route path="/" element={<Navigate to="/corporate-dashboard/schedule" />} />
            <Route path="schedule" element={<MainContent currentTab="schedule" />} />
            <Route path="scheduled-interviews" element={<MainContent currentTab="scheduled-interviews" />} />
            <Route path="create-interview" element={<DomainSelection />} />

            <Route path="view-results" element={ <ViewResults /> } />

            <Route path="create-1:1" element={<CreateOneOnOne />} />

            <Route path="repository" element={<Repository />} />
      </Routes>

        <ToastContainer />
      </main>
    </div>
  </div>
);

export default CorporateDashboard;
