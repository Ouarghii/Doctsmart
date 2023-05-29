import React, { useState } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const UpdateAppointmentForm = ({ appointment, handleSubmit }) => {
  // State for form data
  const [name, setName] = useState(appointment.name);
  const [email, setEmail] = useState(appointment.email);
  const [phone, setPhone] = useState(appointment.phone);
  const [date, setDate] = useState(appointment.date);
  const [time, setTime] = useState(appointment.time);
  const [note, setNote] = useState(appointment.note);

  const onSubmit = (event) => {
    event.preventDefault();
  
    // Format date and time values before submitting the form
    const formattedDate = new Date(date).toISOString().slice(0, 10);
    const formattedTime = new Date(`1970-01-01T${time}`).toISOString().slice(11, 16);
  
    // Call the parent handleSubmit function to update the appointment
    handleSubmit({
      name,
      email,
      phone,
      date: formattedDate,
      time: formattedTime,
      note,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
      </div>
      <Button variant="primary" type="submit">Update</Button>
    </form>
  );
};
export default UpdateAppointmentForm