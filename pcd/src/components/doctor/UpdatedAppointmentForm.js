import React, { useState } from "react";
import axios from "axios";

const UpdateAppointmentForm = ({ appointment, onUpdate }) => {
  // State for form data
  const [name, setName] = useState(appointment.name);
  const [email, setEmail] = useState(appointment.email);
  const [phone, setPhone] = useState(appointment.phone);
  const [date, setDate] = useState(appointment.date);
  const [time, setTime] = useState(appointment.time);
  const [note, setNote] = useState(appointment.note);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send PUT request to update appointment
    axios
      .put(`/appointments/${appointment._id}`, {
        name,
        email,
        phone,
        date,
        time,
        note,
      })
      .then((response) => {
        onUpdate(response.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateAppointmentForm