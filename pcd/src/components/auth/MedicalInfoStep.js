import React, { useState } from 'react';
import './RegistrationForm.css';

const MedicalInfoStep = ({ onNext, onBack, formData }) => {
  const [bloodType, setBloodType] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');
  const [previousConditions, setPreviousConditions] = useState('');

  const handleNext = () => {
    onNext({ bloodType, allergies, medications, previousConditions });
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="step">
      <h2>Step 3: Medical Information</h2>
      <label>
        Blood Type:
        <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
      </label>
      <br />
      <label>
        Allergies:
        <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
      </label>
      <br />
      <label>
        Medications:
        <input type="text" value={medications} onChange={(e) => setMedications(e.target.value)} />
      </label>
      <br />
      <label>
        Previous Conditions:
        <input type="text" value={previousConditions} onChange={(e) => setPreviousConditions(e.target.value)} />
      </label>
      <br />
      <button className='btn btn-success' style={{marginBottom:'10px'}} onClick={handleBack}>Back</button>
      <button className='btn btn-success' onClick={handleNext}>Submit</button>
    </div>
  );
};

export default MedicalInfoStep;
