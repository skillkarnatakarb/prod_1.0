import React, { useState } from 'react';

const CreateOneOnOne = () => {
  const [selectedStudents] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Brown", email: "alice.brown@example.com" },
    { id: 4, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 5, name: "Charlie White", email: "charlie.white@example.com" },
    { id: 6, name: "Emma Wilson", email: "emma.wilson@example.com" },
    { id: 7, name: "Liam Davis", email: "liam.davis@example.com" },
  ]);

  const [bulkMeetingDetails, setBulkMeetingDetails] = useState({
    emails: "",
    date: "",
  });

  const [individualMeetingDetails, setIndividualMeetingDetails] = useState(
    selectedStudents.reduce((acc, student) => {
      acc[student.id] = { date: "" };
      return acc;
    }, {})
  );

  const handleBulkCreateMeeting = () => {
    const emails = bulkMeetingDetails.emails
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email);

    if (emails.length === 0 || emails.length > 10) {
      alert("Please enter between 1 to 10 valid email addresses!");
      return;
    }

    if (!bulkMeetingDetails.date) {
      alert("Please select a date and time for the meeting!");
      return;
    }

    emails.forEach((email) => {
      console.log(`Meeting created for ${email} on ${bulkMeetingDetails.date}`);
    });

    alert(
      `Meetings created for: \n${emails.join("\n")} on ${bulkMeetingDetails.date}`
    );
  };

  const handleIndividualCreateMeeting = (id, email) => {
    if (!individualMeetingDetails[id].date) {
      alert(`Please select a date and time for ${email}`);
      return;
    }
    console.log(
      `Meeting created for ${email} on ${individualMeetingDetails[id].date}`
    );
    alert(
      `Meeting created for ${email} on ${individualMeetingDetails[id].date}`
    );
  };

  const handleIndividualDateChange = (id, value) => {
    setIndividualMeetingDetails({
      ...individualMeetingDetails,
      [id]: { date: value },
    });
  };

  return (
    <div style={containerStyle}>
      {/* Left Column */}
      <div style={leftColumnStyle}>
        <h2>Selected Candidates</h2>
        <div style={scrollContainerStyle}>
          <ul style={studentsListStyle}>
            {selectedStudents.map((student) => (
              <li key={student.id} style={studentsListItemStyle}>
                <div style={candidateDetailsStyle}>
                  <div>
                    <strong>{student.name}</strong>
                    <br />
                    <span>{student.email}</span>
                  </div>
                  <div style={meetingControlsStyle}>
                    <input
                      type="datetime-local"
                      value={individualMeetingDetails[student.id].date}
                      onChange={(e) =>
                        handleIndividualDateChange(student.id, e.target.value)
                      }
                      style={dateInputStyle}
                    />
                    <button
                      style={buttonStyle}
                      onClick={() =>
                        handleIndividualCreateMeeting(student.id, student.email)
                      }
                    >
                      Create Meeting
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div style={rightColumnStyle}>
        <h2>Create One-on-One Meet</h2>
        <div style={formSectionStyle}>
          <h3>Bulk Meeting</h3>
          <label>Emails (Comma Separated)</label>
          <textarea
            placeholder="Enter emails separated by commas"
            value={bulkMeetingDetails.emails}
            onChange={(e) =>
              setBulkMeetingDetails({ ...bulkMeetingDetails, emails: e.target.value })
            }
            style={textareaStyle}
          />
          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={bulkMeetingDetails.date}
            onChange={(e) =>
              setBulkMeetingDetails({ ...bulkMeetingDetails, date: e.target.value })
            }
            style={inputStyle}
          />
          <button style={buttonStyle} onClick={handleBulkCreateMeeting}>
            Create Bulk Meetings
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  gap: "20px",
  padding: "20px",
  backgroundColor: "#f4f4f4",
};

const leftColumnStyle = {
  flex: 1,
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const rightColumnStyle = {
  flex: 1,
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const scrollContainerStyle = {
  maxHeight: "400px",
  overflowY: "auto",
};

const studentsListStyle = {
  listStyle: "none",
  padding: 0,
};

const studentsListItemStyle = {
  marginBottom: "15px",
};

const candidateDetailsStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  gap: "10px", // Add spacing between components
};

const meetingControlsStyle = {
  display: "flex",
  gap: "10px",
};

const formSectionStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "#fff",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  width: "120px", // Set a fixed width
  textAlign: "center", // Ensure the text is centered
};

const dateInputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

export default CreateOneOnOne;
