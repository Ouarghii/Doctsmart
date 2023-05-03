import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import AppointmentForm from "../doctor/AppointmentForm";
import pat from '../../assets/patt.mp4'
import Layout1 from "./Layout1";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

const PAGE_SIZE = 5;

const ListPatients1 = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("/allpatients")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);

  const handleCreateAppointment = (appointmentData) => {
    setAppointments([...appointments, appointmentData]);
    setSelectedPatient({
      ...selectedPatient,
      firstname: appointmentData.name,
      email: appointmentData.email,
      phone: appointmentData.phone,
    });
    setShowAppointmentModal(false);
  };

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setShowAppointmentModal(true);
  };

  const handleDeletePatient = (id) => {
    if (!id) {
      console.error("Invalid ID");
      return;
    }
    
    axios.delete(`/allpatients/${id}`).then((response)=>{
      setPatients((prevPatients)=>
        prevPatients.filter((patient)=>patient._id!==id)
      )
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleFormClose = () => {
    setShowAppointmentModal(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const pageCount = Math.ceil(patients.length / PAGE_SIZE);
  const displayedPatients = patients.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  return (
    <Layout1>
      <video src={pat} autoPlay loop muted />
      <div>
        <h1>List of Patients</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Blood Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedPatients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.email}</td>
                <td>{patient.phone}</td>
                <td>{patient.blood}</td>
                <td>
                  <button onClick={() => handleSelectPatient(patient)}>
                    Create Appointment
                  </button>
                  <button onClick={() => handleDeletePatient(patient._id)}>
                    Delete Patient
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {Array.from(Array(pageCount).keys()).map((pageIndex) => (
            <button key={pageIndex} onClick={() => handlePageChange(pageIndex)}>{pageIndex + 1}</button>
            ))}
</div>
<Modal show={showAppointmentModal} onHide={handleFormClose}>
<Modal.Header closeButton>
<Modal.Title>Create Appointment</Modal.Title>
</Modal.Header>
<Modal.Body>
{selectedPatient && (
<AppointmentForm
             patient={selectedPatient}
             onCreateAppointment={handleCreateAppointment}
             onClose={handleFormClose}
           />
)}
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleFormClose}>
Close
</Button>
</Modal.Footer>
</Modal>
</div>
</Layout1>
);
};

export default ListPatients1;
