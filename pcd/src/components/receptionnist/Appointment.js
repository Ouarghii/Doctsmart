import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './appoi.css'
import Layout from "../Layout";
import Reviewexp from "../Review";
import Helps from "../Helps";
import vid from '../../assets/appontment.mp4'
import UpdatedAppointmentForm from "./UpdatedAppointmentForm"; // import the UpdatedAppointment component

import AppointmentForm from "./AppointmentForm";
import axios from "axios";
const AppointmentDetails = () => {
  // State for appointment details form
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);


  useEffect(() => {
    // Fetch appointment data from the server
    axios.get("/appointments").then((response) => {
      setAppointments(response.data);
    });
  }, []);

  const handleDeleteAppointment = (id) => {
    axios.delete(`/appointments/${id}`).then((response) => {
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment._id !== id)
      );
    });
  };
  
  const handleUpdateAppointment = (appointment) => {
    axios.put(`/appointments/${appointment._id}`, appointment).then((response) => {
      setAppointments((prevAppointments) =>
        prevAppointments.map((prevAppointment) =>
          prevAppointment._id === response.data._id ? response.data : prevAppointment
        )
      );
      setSelectedAppointment(null);
      setShowUpdateForm(false);
    });
  };

 
  return (
    <div className="appointment-details" style={{ background: "rgba(125,125,125,0.25)" }}>
      <div>
        <h2>Appointment Details</h2>
        <table>
          <thead>
            <tr>
              <th className="cell" style={{ color: "white" }}>
                Name
              </th>
              <th className="cell" style={{ color: "white" }}>
                Email
              </th>
              <th className="cell" style={{ color: "white" }}>
                Phone
              </th>
              <th className="cell" style={{ color: "white" }}>
                Date
              </th>
              <th className="cell" style={{ color: "white" }}>
                Time
              </th>
              <th className="cell" style={{ color: "white" }}>
                Note
              </th>
              <th className="cell" style={{ color: "white" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td className="cell">{appointment.name}</td>
                <td className="cell">{appointment.email}</td>
                <td className="cell">{appointment.phone}</td>
                <td className="cell">{new Date(appointment.date).toLocaleDateString()}</td>
                <td className="cell">{appointment.time}</td>
                <td className="cell">{appointment.note}</td>
                <td className="cell">
                  <div style={{ display: 'flex' }}>
                    <button className="btn " onClick={() => handleDeleteAppointment(appointment._id)}>
                      Delete
                    </button>
                    <button className="btn btn-success" style={{ marginLeft: '10px' }} onClick={() => {
                      setSelectedAppointment(appointment);
                      setShowUpdateForm(true);
                    }}>
                      Update
                    </button>
                  </div>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showUpdateForm && (
        <div className="alert">
          <div className="alert-container">
            <button className="close-button" onClick={() => setShowUpdateForm(false)}>
              X
            </button>
            <h3>Update Appointment</h3>
            <AppointmentForm
              appointment={selectedAppointment}
              handleSubmit={handleUpdateAppointment}
              />
              </div>
              </div>
              )}
    </div>
  );
};

const AppointmentCalendar = () => {
  // State for calendar
  const [date, setDate] = useState(new Date());
  const [showHelps, setShowHelps] = useState(false);
  
  const handleDateChange = (value) => {
    setDate(value);
  };
  const handleDayClick = () => {
    setShowHelps(true);
  };
  const handleAlertClose = () => {
    setShowHelps(false);
  };
  const tileClassName = ({ date, view }) => {
    // Add custom CSS class for month element
    if (view === 'month') {
      return date.getMonth() === new Date().getMonth() ? 'current-month' : null;
    }
    // Add custom CSS class for day element
    if (view === 'day') {
      return date.getDay() === 0 || date.getDay() === 6 ? 'weekend-day' : null;
    }
  }



  return (
    <div className="appointment-calendar">
    {showHelps ? (
      <div className="alert">
        <div className="alert-container">
          <button className="close-button" onClick={handleAlertClose}>
            X
          </button>
          <AppointmentForm />
        </div>
      </div>
    ) : (
      <>
        <h2>Appointment Calendar</h2>
        <Calendar
          className="custom-calendar"
          onChange={handleDateChange}
          onClickDay={handleDayClick}
          value={date}
        />
      </>
    )}
  </div>
  );
};


const Appointment = () => {
  return (
    <Layout>
       <video src={vid} autoPlay loop muted />
         <div className="appointment-wrapper">
        
      <AppointmentCalendar />
      <AppointmentDetails />
    </div>
    </Layout>
   
  );
};

export default Appointment;
