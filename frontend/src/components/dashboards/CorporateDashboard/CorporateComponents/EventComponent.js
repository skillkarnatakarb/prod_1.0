import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventComponent = ({ onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date) {
      toast.error("Please fill in all required fields!", {
        position: "top-center", // Updated to use string syntax
        autoClose: 3000,
      });
      return;
    }

    onAddEvent(newEvent); // Pass the event to the parent
    setNewEvent({ title: "", date: "", description: "" }); // Reset the form
    setOpen(false); // Close the modal

    // Show success toast
    toast.success("Event added successfully!", {
      position: "top-center", // Updated to use string syntax
      autoClose: 3000,
    });
  };

  return (
    <div>
      {/* Inline CSS for Toastify */}
      <style>
        {`
          .Toastify__toast--success, .Toastify__toast--error {
            border-radius: 8px; /* Rounded corners for a sleek look */
            font-weight: bold;
            height: auto; /* Adjust height dynamically */
            padding: 10px 15px; /* Comfortable padding for text readability */
            color: white !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
            display: flex; /* Flexbox for alignment */
            align-items: center; /* Center content vertically */
          }

          .Toastify__toast--success {
            background-color: #4caf50 !important; /* Green for success */
          }

          .Toastify__toast--error {
            background-color: #f44336 !important; /* Red for error */
          }

          .Toastify__toast-body {
            display: flex;
            align-items: center;
            justify-content: center; /* Center the text horizontally */
            text-align: center; /* Ensure multiline text is centered */
            width: 100%; /* Full width for proper alignment */
            word-break: break-word; /* Break long words for responsiveness */
          }

        `}
      </style>

      {/* Button to open modal */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
      >
        Add Event
      </Button>

      {/* Modal for adding event */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            name="title"
            label="Event Title"
            value={newEvent.title}
            onChange={handleInputChange}
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="date"
            label="Event Date"
            type="date"
            value={newEvent.date}
            onChange={handleInputChange}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="description"
            label="Event Description"
            value={newEvent.description}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddEvent} color="primary" variant="contained">
            Save Event
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventComponent;
