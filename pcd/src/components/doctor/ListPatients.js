import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import AppointmentForm from "./AppointmentForm";
import pat from '../../assets/patt.mp4';
import { Modal, Button } from 'react-bootstrap';
import './Listpatient.css'
const ListPatients = () => {
  // State and effect hooks
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(7);

  useEffect(() => {
    fetch("/allpatients")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);

  // Event handlers
  const handleCancelAppointmentForm = () => {
    setShowAppointmentForm(false);
  };

  const handleCreateAppointment = (appointmentData) => {
    setAppointments([...appointments, appointmentData]);
    setSelectedPatient({
      ...selectedPatient,
      firstname: appointmentData.name,
      email: appointmentData.email,
      phone: appointmentData.phone,
    });
    setShowAppointmentForm(false);
  };

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setShowAppointmentForm(true);
  };

  const handleHideAppointmentForm = () => {
    setShowAppointmentForm(false);
  };

  const handleShowModal = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPatient(null);
  };

  // Pagination functions
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Rendering
  return (
    <div className="pat-cover">
    <Layout>
        {/* <h1>List of Patients</h1>
              <table class="container">
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
                      <button onClick={() => handleSelectPatient(patient)} style={{ marginRight: "10px" }}>
                        Create Appointment
                      </button>
                      <button onClick={() => handleDeletePatient(patient._id)}>Delete</button>

                    </td>
                  </tr>
                ))}
              </tbody>
              </table> */}





      <div>

      <h1>Patients</h1>
              <table className="containerpatient">
              <thead className="co-thread">
                <tr className="co-td">
                  <th className="co-th">First Name</th>
                  <th className="co-th">Last Name</th>
                  <th className="co-th">Email</th>
                  <th className="co-th">Phone</th>
                  <th className="co-th"> Blood Type</th>
                </tr>
              </thead>
              <tbody className="co-tbody">
                {currentPatients.map((patient, index) => (
                  <tr className="co-tr" key={index}>
                    <td className="co-td">{patient.firstName}</td>
                    <td className="co-td">{patient.lastName}</td>
                    <td className="co-td">{patient.email}</td>
                    <td className="co-td">{patient.phone}</td>
                    <td className="co-td">{patient.blood}</td>
                  </tr>
                ))}
              </tbody>
              </table>


      
        <div className="pagination">
          {patients.length > patientsPerPage &&
            Array.from({ length: Math.ceil(patients.length / patientsPerPage) }, (_, i) => (
              <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
            ))}
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
    <Modal.Title>Create Appointment</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div>
      <h2>Selected Patient: {selectedPatient?.firstname}</h2>
      <p>Email: {selectedPatient?.email}</p>
      <p>Phone: {selectedPatient?.phone}</p>
    </div>
    <AppointmentForm patient={selectedPatient} onSubmit={handleCloseModal} />
  </Modal.Body>
</Modal>
        
        
       
      </div>
    </Layout>
    </div>
  );
};

export default ListPatients;