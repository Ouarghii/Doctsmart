import React from 'react';
import './Services.css';
import {FaBacteria} from 'react-icons/fa'  //ambulance
import {AiFillAlert} from 'react-icons/ai'
import {RiHeartPulseFill} from 'react-icons/ri'
import {RiMentalHealthFill} from 'react-icons/ri'
import {FaHeartbeat} from 'react-icons/fa'
import {FaProcedures} from 'react-icons/fa'
import {FaBaby} from 'react-icons/fa'
import {FaHandHoldingMedical} from 'react-icons/fa'
import {BsLungsFill} from 'react-icons/bs'
import {BiDonateBlood} from 'react-icons/bi'
import Navbar from './Navbar';


function ServicePage() {
  return (
    <div name="Services">
      <div>
      <Navbar />
      </div>
      
    <div className="service-page" >
      <div className='container10'style={{marginTop:'150px'}} >
        <h1>Our services</h1>
        <div className='row2' >
          
          <div className='services1'>
          <AiFillAlert className='icons'/>
            <h2 style={{marginBottom:'50px'}}> Emergency care </h2>
            <p>We are equipped to handle a wide range of medical emergencies, 
              including heart attacks, strokes and other life-threatening conditions.</p>
          </div>
          <div className='services1'>
            <FaProcedures className='icons'/>
            <h2 style={{marginBottom:'50px'}}> Inpatient care</h2>
            <p>We provide care for patients who require overnight stays or extended hospitalization 
              like  treatment for serious illnesses.</p>
          </div>
          <div className='services1'>
            <FaHandHoldingMedical className='icons'/>
            <h2 style={{marginBottom:'50px'}}> Outpatient care </h2>
            <p>Hospitals provide care for pregnant women, including prenatal care, labor and delivery,
               and postpartum care.</p>
          </div>
          <div className='services1'>
            <FaHeartbeat className='icons'/>
            <h2 style={{marginBottom:'50px'}}> Surgery </h2>
            <p>Hospitals have surgical facilities and staff
               that can perform a variety of procedures, 
              from routine surgeries to complex operations.</p>
          </div>
          <div className='services1'>
            <FaBaby className='icons'/>
            <h2 style={{marginBottom:'50px'}}> Obstetrics and gynecology </h2>
            <p>Hospitals provide care for pregnant women, including prenatal care, labor and delivery,
               and postpartum care.</p>
          </div>
          <div className='services1'>
            <FaBacteria className='icons'/>
            <h2 style={{marginBottom:'50px'}}> Oncology </h2>
            <p> We provide treatment and support for cancer patients, including chemotherapy,
               radiation therapy, and other cancer-related services.</p>
          </div>
          {/* <div className='services1'>
            <BsLungsFill className='icons' />
            <h2 style={{marginBottom:'50px'}}> Cardiology </h2>
            <p>We provide care for patients with heart and vascular 
              conditions, including diagnostic tests, procedures, and rehabilitation.</p>
          </div>
          <div className='services1'>
            <BiDonateBlood className='icons'/>
            <h2 style={{marginBottom:'50px'}}> Neurology </h2>
            <p> We provide care for patients with neurological disorders,
               such as Alzheimer's disease, and Parkinson's disease.</p>
          </div>
          <div className='services1'>
            <RiMentalHealthFill className='icons' />
            <h2 style={{marginBottom:'50px'}}> Mental health </h2>
            <p>We provide care for patients with mental health conditions, including 
              psychiatric evaluations, medication management, and counseling.</p>
          </div> */}
        </div>
      </div>


    </div>
    </div>
  );
}

export default ServicePage;
