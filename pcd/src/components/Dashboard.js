import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Card,
} from "react-bootstrap";
import axios from "axios";
import "./dashboard.css";

function Dashboardd() {
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: "",
  });

  useEffect(() => {
    // Fetch the list of patients from the backend API
    axios
      .get("/api/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleShowModal = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPatient((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddPatient = (event) => {
    event.preventDefault();
    // Add a new patient to the database
    axios
      .post("/api/patients", newPatient)
      .then((response) => {
        setPatients((prevState) => [...prevState, response.data]);
        setNewPatient({ name: "", age: "", gender: "", diagnosis: "" });
        setShowModal(false);
      })
      .catch((error) => console.log(error));
  };

  const handleDeletePatient = (id) => {
    // Delete a patient from the database
    axios
      .delete(`/api/patients/${id}`)
      .then(() => {
        setPatients((prevState) =>
          prevState.filter((patient) => patient._id !== id)
        );
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="dashboard-container">
    <Container>
    <Row>
    <Col md={12} lg={6}>
    <div className="dashboard-card">
    <div className="dashboard-card-header">
    <h3>My Patients</h3>
    <Button onClick={handleShowModal}>Add Patient</Button>
    </div>
    <div className="dashboard-card-body">
    {patients.length ? (
    <div className="patients-list">
    {patients.map((patient) => (
    <Card key={patient._id} className="patient-card">
    <Card.Body>
    <Card.Title>{patient.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
    Age: {patient.age}
    </Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">
    Gender: {patient.gender}
    </Card.Subtitle>
    <Card.Text>{patient.diagnosis}</Card.Text>
    <Button
    variant="danger"
    onClick={() => handleDeletePatient(patient._id)}
    >
    Delete
    </Button>
    </Card.Body>
    </Card>
    ))}
    </div>
    ) : (
    <p>No patients yet</p>
    )}
    </div>
    </div>
    </Col>
    <Col md={12} lg={6}>
    <div className="dashboard-card">
    <div className="dashboard-card-header">
    <h3>Statistics</h3>
    </div>
    <div className="dashboard-card-body">
    <p>Coming soon...</p>
    </div>
    </div>
    </Col>
    </Row>
    </Container>
    <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
    <Modal.Title>Add Patient</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={handleAddPatient}>
    <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control
    type="text"
    name="name"
    value={newPatient.name}
    onChange={handleInputChange}
    required
    />
    </Form.Group>
    <Form.Group>
    <Form.Label>Age</Form.Label>
    <Form.Control
    type="number"
    name="age"
    value={newPatient.age}
    onChange={handleInputChange}
    required
    />
    </Form.Group>
    <Form.Group>
    <Form.Label>Gender</Form.Label>
    <Form.Control
    as="select"
    name="gender"
    value={newPatient.gender}
    onChange={handleInputChange}
    required
    >
    <option value="">Select gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    </Form.Control>
    </Form.Group>
    <Form.Group>
    <Form.Label>Diagnosis</Form.Label>
    <Form.Control
    as="textarea"
    name="diagnosis"
    value={newPatient.diagnosis}
    onChange={handleInputChange}
    required
    />
    </Form.Group>
    <Button type="submit">Add</Button>
    </Form>
    </Modal.Body>
    </Modal>
    </div>
    );
    }
    
    export default Dashboardd;