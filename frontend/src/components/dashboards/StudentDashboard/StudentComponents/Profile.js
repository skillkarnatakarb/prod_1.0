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

  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(true);

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
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.dob) errors.dob = "Date of birth is required.";
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.state) errors.state = "State is required.";
    if (!formData.district) errors.district = "District is required.";
    if (!formData.city) errors.city = "City is required.";
    if (!formData.pincode) {
      errors.pincode = "Pincode is required.";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = "Pincode must be 6 digits.";
    }
    if (!formData.qualification) errors.qualification = "Qualification is required.";
    if (!formData.specialization) errors.specialization = "Specialization is required.";
    if (!formData.collegeName) errors.collegeName = "College name is required.";
    if (!formData.yearOfPassing) {
      errors.yearOfPassing = "Year of passing is required.";
    } else if (!/^\d{4}$/.test(formData.yearOfPassing)) {
      errors.yearOfPassing = "Year of passing must be a 4-digit year.";
    }
    if (formData.github && !/^https?:\/\/github\.com\/.+$/.test(formData.github)) {
      errors.github = "GitHub link is invalid.";
    }
    if (formData.linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/.+$/.test(formData.linkedin)) {
      errors.linkedin = "LinkedIn link is invalid.";
    }
    if (formData.twitter && !/^https?:\/\/(www\.)?twitter\.com\/.+$/.test(formData.twitter)) {
      errors.twitter = "Twitter link is invalid.";
    }
    if (formData.resume && !/^https?:\/\/.+/.test(formData.resume)) {
      errors.resume = "Resume link is invalid.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsEditing(false);
      alert("Profile updated successfully!");
    } else {
      alert("Please fix the highlighted errors.");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <h2>Personal Details</h2>
        <div className="form-row">
          <div className={`form-group ${errors.firstName ? "error-highlight" : ""}`}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className={`form-group ${errors.lastName ? "error-highlight" : ""}`}>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group ${errors.dob ? "error-highlight" : ""}`}>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"  
              value={formData.dob}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.dob && <span className="error">{errors.dob}</span>}  
          </div>
          <div className={`form-group ${errors.phoneNumber ? "error-highlight" : ""}`}>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
        </div>
        <h2>Address</h2>
        <div className="form-row">
          <div className={`form-group ${errors.address ? "error-highlight" : ""}`}>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group ${errors.state ? "error-highlight" : ""}`}>
            <label>State:</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select State</option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
          <div className={`form-group ${errors.district ? "error-highlight" : ""}`}>
            <label>District:</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              disabled={!isEditing || !formData.state}
            >
              <option value="">Select District</option>
              {(districts[formData.state] || []).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && <span className="error">{errors.district}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group ${errors.city ? "error-highlight" : ""}`}>
            <label>City:</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={!isEditing || !formData.district}
            >
              <option value="">Select City</option>
              {(cities[formData.district] || []).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <div className={`form-group ${errors.pincode ? "error-highlight" : ""}`}>
            <label>Pincode:</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.pincode && <span className="error">{errors.pincode}</span>}
          </div>
        </div>
        <h2>Education</h2>
        <div className="form-row">
          <div className={`form-group ${errors.qualification ? "error-highlight" : ""}`}>
            <label>Qualification:</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Qualification</option>
              {Object.keys(qualifications).map((qual) => (
                <option key={qual} value={qual}>
                  {qual}
                </option>
              ))}
            </select>
            {errors.qualification && (
              <span className="error">{errors.qualification}</span>
            )}
          </div>
          <div className={`form-group ${errors.specialization ? "error-highlight" : ""}`}>
            <label>Specialization:</label>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              disabled={!isEditing || !formData.qualification}
            >
              <option value="">Select Specialization</option>
              {(qualifications[formData.qualification] || []).map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
            {errors.specialization && (
              <span className="error">{errors.specialization}</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group ${errors.collegeName ? "error-highlight" : ""}`}>
            <label>College Name:</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.collegeName && (
              <span className="error">{errors.collegeName}</span>
            )}
          </div>
          <div className={`form-group ${errors.yearOfPassing ? "error-highlight" : ""}`}>
            <label>Year of Passing:</label>
            <input
              type="text"
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.yearOfPassing && (
              <span className="error">{errors.yearOfPassing}</span>
            )}
          </div>
        </div>
        <h2>Social Links</h2>
        <div className="form-row">
          <div className={`form-group ${errors.github ? "error-highlight" : ""}`}>
            <label>GitHub:</label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.github && <span className="error">{errors.github}</span>}
          </div>
          <div className={`form-group ${errors.linkedin ? "error-highlight" : ""}`}>
            <label>LinkedIn:</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.linkedin && (
              <span className="error">{errors.linkedin}</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group ${errors.twitter ? "error-highlight" : ""}`}>
            <label>Twitter:</label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.twitter && <span className="error">{errors.twitter}</span>}
          </div>
          <div className={`form-group ${errors.resume ? "error-highlight" : ""}`}>
            <label>Resume (URL):</label>
            <input
              type="url"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {errors.resume && <span className="error">{errors.resume}</span>}
          </div>
        </div>
        <div className="form-actions">
          {isEditing ? (
            <button type="submit" className="submit-btn">
              Update
            </button>
          ) : (
            <button type="button" className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;

