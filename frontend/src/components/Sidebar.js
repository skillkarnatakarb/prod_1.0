import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";
import "boxicons/css/boxicons.min.css"; // Import Boxicons

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className={`sidebar ${isExpanded ? "active" : ""}`}>
      {/* Logo 
      <div className="logo">
        <i className="bx bx-cube-alt"></i>
        {isExpanded && <span>Logo</span>}
      </div>
      */}

      {/* Menu Links */}
      <nav className="menu">
        <h1 className={`menu-header ${isExpanded ? "expanded" : ""}`}>Menu</h1>
        <div className="menu-item" data-tooltip="Home">
          <i className="bx bx-home-smile"></i>
          {isExpanded && <span>Profile</span>}
        </div>
        <div className="menu-item" data-tooltip="Stats">
          <i className="bx bx-bar-chart-alt-2"></i>
          {isExpanded && <span>Stats</span>}
        </div>
        <div className="menu-item" data-tooltip="Chat">
          <i className="bx bx-message-square-dots"></i>
          {isExpanded && <span>Chat</span>}
        </div>
        <div className="menu-item" data-tooltip="Bookmarks">
          <i className="bx bx-bookmarks"></i>
          {isExpanded && <span>Bookmarks</span>}
        </div>
        <div className="menu-item" data-tooltip="Notification">
          <i className="bx bx-bell"></i>
          {isExpanded && <span>Notification</span>}
        </div>
        <div className="menu-item" data-tooltip="Setting">
          <i className="bx bx-cog"></i>
          {isExpanded && <span>Setting</span>}
        </div>

        <h1 className={`menu-header shortcuts ${isExpanded ? "expanded" : ""}`}>
          Shortcuts
        </h1>
        <div className="menu-item" data-tooltip="Add">
          <i className="bx bx-add-to-queue"></i>
          {isExpanded && <span>Add</span>}
        </div>
        <div className="menu-item" data-tooltip="Remove">
          <i className="bx bx-message-square-minus"></i>
          {isExpanded && <span>Remove</span>}
        </div>
      </nav>

      {/* Logout */}
      <div className="logout" data-tooltip="Logout" onClick={handleLogout}>
        <i className="bx bx-log-out"></i>
        {isExpanded && <span>Logout</span>}
      </div>

      {/* Toggle Menu */}
      <div className="toggle-menu" onClick={() => setIsExpanded(!isExpanded)}>
        <i className={isExpanded ? "bx bxs-left-arrow" : "bx bxs-right-arrow"}></i>
      </div>
    </aside>
  );
};

export default Sidebar;
