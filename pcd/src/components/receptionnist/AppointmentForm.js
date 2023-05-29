import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AppointmentForm.css";
import Layout1 from "./Layout1";
import { message } from "antd";
import pex from '../../assets/pex.mp4'
const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/appointments");
        setAppointments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="appointment-list-wrapperrr">

      <h2 style={{marginBottom:'-20px',marginTop:'20px'}}>Appointments</h2>
      <table className="containerpati">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.phone}</td>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AppointmentForm1 = () => {
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
      // Show success message
      message.success("Appointment added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="appointcontainer">
    <Layout1>
      <div className="pagecontainer" style={{display:'flex'}}>
      <div className="appointment-form-wrapperrr">
        <div className="aaappointment-form">
          <h2>Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="formulaire">
            <div className="formm-field">
              <label className="labell" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ border: "black" }}
              />
            </div>
            <div className="formm-field">
              <label className="labell" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ border: "black" }}
              />
            </div>
            <div className="formm-field">
              <label className="labell" htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ border: "black" }}
              />
            </div>
            <div className="formm-field">
          <label className="labell" htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ border: "black" }}
          />
        </div>
        <div className="formm-field">
          <label className="labell" htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            style={{ border: "black" }}
          />
        </div>
        <button className="bntpulse" type="submit">Submit</button>
      </form>
    </div>
  
  
  </div>
  <AppointmentList />
  </div>
</Layout1>
</div>
);
};

export default AppointmentForm1;