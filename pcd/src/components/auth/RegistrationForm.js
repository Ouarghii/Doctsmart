import React, { useState } from 'react';
import './RegistrationForm.css';
import './mix.css'
import PersonalInfoStep from './PersonalInfoStep';
import ContactInfoStep from './ContactInfoStep';
import MedicalInfoStep from './MedicalInfoStep';
import Header from './Header';
import myvideo from '../../assets/myvideo.mp4'

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="background-video" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <source src={myvideo} type="video/mp4" />
      </video>
        <Header />
          <div className="form-container">

{currentStep === 1 && <PersonalInfoStep onNext={handleNext} />}
{currentStep === 2 && <ContactInfoStep onNext={handleNext} onBack={handleBack} formData={formData} />}
{currentStep === 3 && <MedicalInfoStep onSubmit={handleSubmit} onBack={handleBack} formData={formData} />}
{currentStep > 1 && (
  <button className="btn btn-success" onClick={handleBack}>
    Previous
  </button>
)}
</div>
    </div>
    
  );
};

export default RegistrationForm;