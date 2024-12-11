import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        padding: "20px 0", // Adjust padding if needed
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Arial', sans-serif",
        height: "116vh",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          width: "90%",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Have Some Questions?
        </h2>
        <p style={{ marginBottom: "30px", color: "#666" }}>
          Feel free to reach out to us for any queries or support.
        </p>
        <form>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <textarea
              name="message"
              placeholder="Your questions..."
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
                minHeight: "100px",
                resize: "none",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.3s",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
