import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './CorporateComponents/Sidebar';
import Header from './CorporateComponents/Header';
import MainContent from './CorporateComponents/MainContent';
import ScheduleCalender from './CorporateComponents/ScheduleCalender';
import DomainSelection from './CorporateComponents/DomainSelection';

const CorporateDashboard = () => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar />
    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="" element={<MainContent />} /> {/* Default route for Corporate Dashboard */}
          <Route path="calendar" element={<ScheduleCalender />} />
          <Route path="domain-selection" element={<DomainSelection />} />
        </Routes>
      </main>
    </div>
  </div>
);

export default CorporateDashboard;
