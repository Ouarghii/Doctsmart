import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import AppointmentForm from "./AppointmentForm";
import pat from '../../assets/patt.mp4'

const ListPatients = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/allpatients")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);
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

  return (
    <Layout>
        <video src={pat} autoPlay loop muted />
      <div>
      {showAppointmentForm ? (
              <div>
                <button onClick={handleHideAppointmentForm}>X</button>
                <AppointmentForm
                  patient={selectedPatient}
                  onSubmit={handleCreateAppointment}
                  onCancel={handleCancelAppointmentForm}
                />
        </div>
      ):(
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
            {patients.map((patient, index) => (
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )}
        {selectedPatient && (
          <div>
            <h2>Selected Patient: {selectedPatient.firstname}</h2>
            <p>Email: {selectedPatient.email}</p>
            <p>Phone: {selectedPatient.phone}</p>
          
            </div>
          
        )}
      </div>
    </Layout>
  );
};

export default ListPatients;