import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/Form.css";


const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const response = await axios.post("http://localhost:5000/api/auth/google-login", {
        email: user.email,
        name: user.displayName || "Google User",
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      switch (response.data.role) {
        case "student":
          navigate("/student-dashboard");
          break;
        case "corporate":
          navigate("/corporate-dashboard");
          break;
        case "college":
          navigate("/college-dashboard");
          break;
        default:
          navigate("/");
          break;
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      setError("Google Sign-In failed! Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signin", formData);
      setSuccess("Login successful!");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      switch (response.data.role) {
        case "student":
          navigate("/student-dashboard");
          break;
        case "corporate":
          navigate("/corporate-dashboard");
          break;
        case "college":
          navigate("/college-dashboard");
          break;
        default:
          navigate("/");
          break;
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div>
      
      <div className="card-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="form-button">
            Sign In
          </button>
          <button type="button" className="google-button" onClick={handleGoogleSignIn}>
            <i className="fab fa-google"></i> Continue with Google
          </button>
          <p className="form-text">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signin;
