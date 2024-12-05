import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";

const EventCalendar = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const filteredEvents = Array.isArray(events)
    ? events.filter((event) => dayjs(event.date).isSame(selectedDate, "day"))
    : [];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Event Calendar
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              slotProps={{
                textField: { variant: "outlined" },
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell>{event.title}</TableCell>
                      <TableCell>
                        {event.description || "No description provided"}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      No events for the selected date
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventCalendar;
