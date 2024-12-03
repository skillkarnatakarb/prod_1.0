const Event = require("../models/Event");

// Add Event
exports.addEvent = async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const newEvent = await Event.create({ title, date, description });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error adding event:", error.message);
    res.status(500).json({ message: "Failed to add event" });
  }
};

// Get Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error.message);
    res.status(500).json({ message: "Failed to fetch events" });
  }
};
