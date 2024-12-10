import React from "react";

const Profile = ({ role }) => {
  const email = localStorage.getItem("email");

  const roleDetails = {
    student: {
      heading: "Student Profile",
      description: "View and manage your courses and progress.",
    },
    corporate: {
      heading: "Corporate Profile",
      description: "Manage job postings and track applications.",
    },
    college: {
      heading: "College Profile",
      description: "Monitor and manage campus placement details.",
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{roleDetails[role]?.heading}</h1>
      <p>{roleDetails[role]?.description}</p>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
};

export default Profile;
