import React, { useState, useRef, useEffect } from "react";
import styles from "./Calendar.module.css";
import Sidebar from "./Sidebar";
import { Calendar as BigCalendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

// Firebase
import { getDatabase, ref, onValue, push, update, remove } from "firebase/database";
import { db } from "../firebase.js"; // Ensure correct path

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", start: dayjs().toDate(), end: dayjs().toDate() });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchEvents = () => {
      const db = getDatabase();
      const eventsRef = ref(db, "events");
      onValue(eventsRef, (snapshot) => {
        const data = snapshot.val();
        const eventsData = data
          ? Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
              start: new Date(data[key].start),
              end: new Date(data[key].end),
            }))
          : [];
        setEvents(eventsData);
      });
    };

    fetchEvents();
  }, []);

  const handleAddEvent = async () => {
    try {
      const db = getDatabase();
      const eventsRef = ref(db, "events");
      const newEventRef = push(eventsRef);
      await update(newEventRef, {
        title: newEvent.title,
        start: newEvent.start.toISOString(),
        end: newEvent.end.toISOString(),
      });
      setNewEvent({ title: "", start: dayjs().toDate(), end: dayjs().toDate() });
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleEventResize = async ({ event, start, end }) => {
    try {
      const db = getDatabase();
      const eventRef = ref(db, `events/${event.id}`);
      await update(eventRef, { start: start.toISOString(), end: end.toISOString() });
      setEvents(events.map((e) => (e.id === event.id ? { ...e, start, end } : e)));
    } catch (error) {
      console.error("Error resizing event:", error);
    }
  };

  const handleEventDrop = async ({ event, start, end }) => {
    try {
      const db = getDatabase();
      const eventRef = ref(db, `events/${event.id}`);
      await update(eventRef, { start: start.toISOString(), end: end.toISOString() });
      setEvents(events.map((e) => (e.id === event.id ? { ...e, start, end } : e)));
    } catch (error) {
      console.error("Error dropping event:", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const db = getDatabase();
      const eventRef = ref(db, `events/${eventId}`);
      await remove(eventRef);
      setEvents(events.filter((e) => e.id !== eventId));
      handleDialogClose();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedEvent(null);
  };

  const handleDialogSave = async () => {
    try {
      const db = getDatabase();
      const eventRef = ref(db, `events/${selectedEvent.id}`);
      await update(eventRef, {
        title: selectedEvent.title,
        start: selectedEvent.start.toISOString(),
        end: selectedEvent.end.toISOString(),
      });
      setEvents(events.map((e) => (e.id === selectedEvent.id ? { ...selectedEvent, start: new Date(selectedEvent.start), end: new Date(selectedEvent.end) } : e)));
      handleDialogClose();
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className={styles.calendarContainer}>
      <Sidebar />
      <div className={styles.calendarContent}>
        <h1>Calendar</h1>
        <div className={styles.addEventForm}>
          <TextField
            label="Event Title"
            variant="outlined"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Start Date & Time"
              value={dayjs(newEvent.start)}
              onChange={(date) => setNewEvent({ ...newEvent, start: date.toDate() })}
              slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
            />
            <DateTimePicker
              label="End Date & Time"
              value={dayjs(newEvent.end)}
              onChange={(date) => setNewEvent({ ...newEvent, end: date.toDate() })}
              slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
            />
          </LocalizationProvider>
          <Button variant="contained" color="primary" onClick={handleAddEvent}>
            Add Event
          </Button>
        </div>

        <DndProvider backend={HTML5Backend}>
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, marginTop: "20px" }}
            views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
            resizable
            draggableAccessor={() => true}
            onEventResize={handleEventResize}
            onEventDrop={handleEventDrop}
            onSelectEvent={handleEditEvent}
            view={view}
            onView={handleViewChange}
            date={date}
            onNavigate={handleNavigate}
          />
        </DndProvider>

        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogContent>
            <TextField
              label="Event Title"
              variant="outlined"
              value={selectedEvent?.title || ""}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, title: e.target.value })}
              fullWidth
              margin="normal"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Start Date & Time"
                value={dayjs(selectedEvent?.start)}
                onChange={(date) => setSelectedEvent({ ...selectedEvent, start: date.toDate() })}
                slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
              />
              <DateTimePicker
                label="End Date & Time"
                value={dayjs(selectedEvent?.end)}
                onChange={(date) => setSelectedEvent({ ...selectedEvent, end: date.toDate() })}
                slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
              />
            </LocalizationProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="secondary">Cancel</Button>
            <Button onClick={handleDialogSave} color="primary">Save</Button>
            <Button onClick={() => handleDeleteEvent(selectedEvent.id)} color="error">Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Calendar;
