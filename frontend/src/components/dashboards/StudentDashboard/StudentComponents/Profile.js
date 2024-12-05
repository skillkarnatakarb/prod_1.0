import React, { useState } from "react";
import "../StudentDashboard.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "Male",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    qualification: "",
    specialization: "",
    collegeName: "",
    yearOfPassing: "",
    github: "",
    linkedin: "",
    twitter: "",
    resume: "",
  });

  const states = {
    Maharashtra: ["Mumbai", "Pune"],
    Gujarat: ["Ahmedabad", "Surat"],
    Karnataka: ["Bengaluru", "Mysuru"],
    TamilNadu: ["Chennai", "Coimbatore"],
  };
  
  const districts = {
    Maharashtra: ["Mumbai District", "Pune District"],
    Gujarat: ["Ahmedabad District", "Surat District"],
    Karnataka: ["Bengaluru District", "Mysuru District"],
    TamilNadu: ["Chennai District", "Coimbatore District"],
  };
  
  const cities = {
    "Mumbai District": ["Andheri", "Borivali", "Dadar"],
    "Pune District": ["Shivajinagar", "Kothrud", "Hadapsar"],
    "Ahmedabad District": ["Navrangpura", "Maninagar"],
    "Surat District": ["Adajan", "Katargam"],
    "Bengaluru District": ["Whitefield", "Indiranagar"],
    "Mysuru District": ["Jayalakshmipuram", "Vijayanagar"],
    "Chennai District": ["T. Nagar", "Guindy"],
    "Coimbatore District": ["RS Puram", "Ganapathy"],
  };
  
  

  const qualifications = {
    BCA: ["Computer Science", "IT"],
    BSc: ["PCM", "PCB", "EMCS"],
    BBA: ["Finance", "Marketing", "HR"],
    BCom: ["Accounting", "Taxation", "Banking"],
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <h2>Personal Details</h2>
        <div className="form-row">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-group gender-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <h2>Contact Details</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <h2>Address</h2>
<div className="form-row">
  <div className="form-group">
    <label>Address:</label>
    <input
      type="text"
      name="address"
      value={formData.address}
      onChange={handleChange}
    />
  </div>
</div>
<div className="form-row">
  <div className="form-group">
    <label>State:</label>
    <select
      name="state"
      value={formData.state}
      onChange={handleChange}
    >
      <option value="">Select State</option>
      {Object.keys(states).map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>District:</label>
    <select
      name="district"
      value={formData.district}
      onChange={handleChange}
      disabled={!formData.state} // Disable if state is not selected
    >
      <option value="">Select District</option>
      {(districts[formData.state] || []).map((district) => (
        <option key={district} value={district}>
          {district}
        </option>
      ))}
    </select>
  </div>
</div>
<div className="form-row">
  <div className="form-group">
    <label>City:</label>
    <select
      name="city"
      value={formData.city}
      onChange={handleChange}
      disabled={!formData.district} // Disable if district is not selected
    >
      <option value="">Select City</option>
      {(cities[formData.district] || []).map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>Pincode:</label>
    <input
      type="text"
      name="pincode"
      value={formData.pincode}
      onChange={handleChange}
    />
  </div>
</div>

        <h2>Education</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Qualification:</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            >
              <option value="">Select Qualification</option>
              {Object.keys(qualifications).map((qual) => (
                <option key={qual} value={qual}>
                  {qual}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Specialization:</label>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            >
              <option value="">Select Specialization</option>
              {(qualifications[formData.qualification] || []).map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>College Name:</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Year of Passing:</label>
            <input
              type="text"
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleChange}
            />
          </div>
        </div>

        <h2>Social Links</h2>
        <div className="form-row">
          <div className="form-group">
            <label>GitHub:</label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>LinkedIn:</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Twitter:</label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Resume (URL):</label>
            <input
              type="url"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
