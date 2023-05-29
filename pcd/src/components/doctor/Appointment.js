import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './appoi.css'
import Layout from "../Layout";
import Reviewexp from "../Review";
import Helps from "../Helps";
import vid from '../../assets/appointment.gif'
import UpdatedAppointmentForm from "./UpdatedAppointmentForm"; // import the UpdatedAppointment component
import './Appointment.css'
import AppointmentForm from "./AppointmentForm";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'; // import the Bootstrap modal components
const AppointmentDetails = () => {
  // State for appointment details form
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to show or hide the modal

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
      setShowModal(false);
    });
  };

  const handleShowUpdateForm = (appointment) => {
    setSelectedAppointment(appointment);
    setShowUpdateForm(true);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false); // Function to hide the modal

  const handleSendAppointment = (appointment) => {
    const requestData = {
      recipients: appointment.recipients // Add the recipients as needed
    };
  
    axios.post("/api/update-appointment", requestData)
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });
  };

  return (
    <div className="appointment-details" style={{ background: "rgba(125,125,125,0.25)" }}>
      <div>
        <h2>Appointment Details</h2>
  
        
          <table className="containerpati">
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
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
              <td className="cell">{appointment.name}</td>
              <td className="cell">{appointment.email}</td>
              <td className="cell">{appointment.phone}</td>
              <td className="cell">{new Date(appointment.date).toLocaleDateString()}</td>
              <td className="cell">{appointment.time}</td>
              <td className="cell">{appointment.note}</td>
              <td className="cell">
                <div style={{ display: 'flex',flexDirection:'column' }}>
                  <button className="btttnn btn-danger" onClick={() => {
                    if (window.confirm('Are you sure you want to delete this appointment?')) {
                      handleDeleteAppointment(appointment._id);
                    }
                  }}>
                    Delete
                  </button>
                  {/* <button className="btttnn btn-primary" style={{ marginTop: '10px' }} onClick={() => {
                    handleShowUpdateForm(appointment);
                  }}>
                    Update
                  </button> */}
                  <button className="btttnnapp" onClick={handleSendAppointment} style={{ marginTop: '10px' }} ><Link to='/diseasepredection' style={{ color: '#1f212a',textDecoration:'none' }}>Consultation</Link></button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
          </table>

      </div>
      {/* Show the UpdatedAppointmentForm component inside the Bootstrap modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showUpdateForm && selectedAppointment && (
            <UpdatedAppointmentForm
              appointment={selectedAppointment}
              handleSubmit={handleUpdateAppointment}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
  );
};

const AppointmentCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      return date.getMonth() === new Date().getMonth() ? 'current-month' : null;
    }
    if (view === 'day') {
      return date.getDay() === 0 || date.getDay() === 6 ? 'weekend-day' : null;
    }
  };

  const handleDateClick = (value) => {
    setDate(value);
    handleShowModal();
  };

  return (
    <div className="appointment-calendar">
      <div className="appointment-wrapper">
        <Calendar value={date} onClickDay={handleDateClick} tileClassName={tileClassName} className="custom-calendar" />
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointmentForm handleCloseModal={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};


const Appointment = () => {
  return (
    <div className='app-cover'>
    <Layout >
      
         <div className="appointment-wrapper">
        
      {/* <AppointmentCalendar /> */}
      <AppointmentDetails />
    </div>
    </Layout>
    </div>
   
  );
};

export default Appointment;
