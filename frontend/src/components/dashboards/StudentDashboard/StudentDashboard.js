import React, { useState } from "react";

import Sidebar from "./StudentComponents/Sidebar";
import Header from "./StudentComponents/Header";
import UpcomingInterviews from "./StudentComponents/UpcomingInterviews";
import UploadProjects from "./StudentComponents/UploadProjects";
import ApplyForInternships from "./StudentComponents/ApplyForInternships";
import GetCounseling from "./StudentComponents/GetCounseling";
import Profile from "./StudentComponents/Profile";
import ApplyForInternship from "./StudentComponents/ApplyForInternships";
import "./StudentDashboard.css";


const StudentDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const renderContent = () => {
    switch (activeMenu) {
      case "Upcoming Interviews":
        return <UpcomingInterviews />;
      case "Take Assessments":
        return <div>Take Assessments Component</div>; // Add when ready
      case "Upload Projects":
        return <UploadProjects />;
      case "Profile":
        return <Profile/>; // Add when ready
      case "Get Certified":
        return <div>Get Certified Component</div>; // Add when ready
      case "Get Counseling":
        return <GetCounseling/>; // Add when ready
      case "Apply For Internships":
        return <ApplyForInternships />;
      default:
        return <h2>Welcome to the Student Dashboard!</h2>;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar setActiveMenu={setActiveMenu} />
      <div className="dashboard-main">
        <Header title={activeMenu} />
        <div className="dashboard-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
