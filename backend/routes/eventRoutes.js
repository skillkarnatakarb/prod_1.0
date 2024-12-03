const express = require("express");
const { addEvent, getEvents } = require("../controllers/Event");
const router = express.Router();

// Add Event
router.post("/events", addEvent);

// Get Events
router.get("/events", getEvents);

module.exports = router;
