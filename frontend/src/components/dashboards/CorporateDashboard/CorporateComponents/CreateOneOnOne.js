import React, { useState } from "react";

const CreateOneOnOne = () => {
  // Dummy data for selected candidates
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
      <div style={columnStyle}>
        <h2>Create One-on-One Meet</h2>
        <div className="form-section">
          <h3>Bulk Meeting</h3>
          <label>Emails (Comma Separated)</label>
          <textarea
            name="bulkEmails"
            rows="3"
            placeholder="Enter emails separated by commas"
            value={bulkMeetingDetails.emails}
            onChange={(e) =>
              setBulkMeetingDetails({ ...bulkMeetingDetails, emails: e.target.value })
            }
            style={bulkEmailInputStyle}
          />
          <label>Date & Time</label>
          <input
            type="datetime-local"
            name="bulkDate"
            value={bulkMeetingDetails.date}
            onChange={(e) =>
              setBulkMeetingDetails({ ...bulkMeetingDetails, date: e.target.value })
            }
          />
          <button style={bulkButtonStyle} onClick={handleBulkCreateMeeting}>
            Create Bulk Meetings
          </button>
        </div>
      </div>

      {/* Separator */}
      <div style={separatorStyle}></div>

      {/* Right Column */}
      <div style={columnStyle}>
        <h3>Selected Candidates</h3>
        <div style={scrollContainerStyle}>
          <ul style={studentsListStyle}>
            {selectedStudents.map((student) => (
              <li key={student.id} style={studentsListItemStyle}>
                <div style={candidateDetailsStyle}>
                  <div style={{ flex: 1 }}>
                    <span>{student.name} - {student.email}</span>
                  </div>
                  <div style={{ flex: 2 }}>
                    <input
                      type="datetime-local"
                      value={individualMeetingDetails[student.id].date}
                      onChange={(e) =>
                        handleIndividualDateChange(student.id, e.target.value)
                      }
                      style={individualDateInputStyle}
                    />
                    <button
                      style={createButtonStyle}
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
    </div>
  );
};

// Inline Styles
const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  padding: "20px",
};

const columnStyle = {
  flex: 1,
  padding: "10px",
};

const separatorStyle = {
  width: "2px",
  backgroundColor: "#ccc",
  margin: "0 20px",
};

const bulkEmailInputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const scrollContainerStyle = {
  maxHeight: "400px",
  overflowY: "scroll",
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const studentsListStyle = {
  listStyle: "none",
  padding: "0",
  margin: "0",
};

const studentsListItemStyle = {
  marginBottom: "10px",
};

const candidateDetailsStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  backgroundColor: "#ffffff",
  color: "#333",
};

const bulkButtonStyle = {
  backgroundColor: "#6c63ff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

const individualDateInputStyle = {
  marginRight: "10px",
  padding: "5px",
};

const createButtonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "3px",
  cursor: "pointer",
};

export default CreateOneOnOne;
