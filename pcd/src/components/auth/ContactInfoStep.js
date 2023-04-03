import React, { useState } from 'react';
import './RegistrationForm.css';

const ContactInfoStep = ({ onNext, onBack, formData }) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    onNext({ address, city, state, zip, phone });
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="step">
      <h2>Step 2: Contact Information</h2>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        State:
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <br />
      <label>
        Zip:
        <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <button className='btn btn-success' style={{marginBottom:'10px'}} onClick={handleBack}>Back</button>
      <button className='btn btn-success' onClick={handleNext}>Next</button>
    </div>
  );
};

export default ContactInfoStep;