import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";
import "../../../../styles/corporate.css";

import EventComponent from "./EventComponent";
import EventCalendar from "./EventCalendar";

const MainContent = ({ currentTab }) => {
  const [events, setEvents] = useState([]);

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Ensure the URL matches your backend routes
        const response = await axios.get("http://localhost:5000/api/events");
        setEvents(response.data || []); // Ensure events is always an array
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]); // Default to empty array if fetching fails
      }
    };
    fetchEvents();
  }, []);

  // Function to handle adding a new event
  const handleAddEvent = async (newEvent) => {
    try {
      // Ensure the URL matches your backend routes
      const response = await axios.post("http://localhost:5000/api/events", newEvent);
      setEvents((prev) => [...prev, response.data]); // Add the new event to state
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div className="main-content">
      <Card>
        <CardContent>
          {currentTab === "schedule" && (
            <>
              <Typography variant="h5">Schedule (Add to Calendar)</Typography>
              <EventComponent onAddEvent={handleAddEvent} />
            </>
          )}
          {currentTab === "scheduled-interviews" && (
            <>
              <Typography variant="h5">Scheduled Interviews Calendar</Typography>
              <EventCalendar events={events} />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MainContent;
