import React, { useState } from 'react';
import './RegistrationForm.css';

const PersonalInfoStep = ({ onNext }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const handleNext = () => {
    onNext({ firstName, lastName, dob, gender });
  };

  return (
    <div className="step">
      <h2>Step 1: Personal Information</h2>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">--Select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <button className='btn btn-success' onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfoStep;