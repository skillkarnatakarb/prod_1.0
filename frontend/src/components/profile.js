import React from "react";

const Profile = () => {
  const email = localStorage.getItem("email");

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;
