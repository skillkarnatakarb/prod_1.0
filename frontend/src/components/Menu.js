import React from 'react';

const Menu = ({ user, onLogout }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#1976d2',
        color: '#fff',
        alignItems: 'center',
      }}
    >
      <h3>Welcome, {user.name}</h3>
      <button
        onClick={onLogout}
        style={{
          padding: '10px 15px',
          backgroundColor: '#dc004e',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Menu;
