import React, { useState } from "react";
import axios from "axios";
import "./AppointmentForm.css";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/appointments", {
        name,
        email,
        phone,
        date,
        time,
        note,
      });
      console.log(response.data);
      // Clear the form fields
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setNote("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="appointment-form-wrapper">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{borderColor:'black'}}
            required
            
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{borderColor:'black'}}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{borderColor:'black'}}
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{borderColor:'black'}}
          />
        </div>
        <div className="form-field">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{borderColor:'black',marginTop:'15px'}}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="note">Note:</label>
          <textarea
            id="note"
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{borderColor:'black',marginTop:'15px'}}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Book Appointment</button>
        </div>
      </form>
    </div>
  );
};
export default AppointmentForm