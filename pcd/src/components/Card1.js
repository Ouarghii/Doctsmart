import React from 'react'
import p1 from '../assets/p1.jpg'
import D from '../assets/D.png'
import './card.css'
const Card1 = (props) => {

  return (
    <div className='card text-center'>
         <div className='overflow'>
            <img src={D} alt='image1' className='img card-img-top'></img>
         </div>
         <div className='card-body text-dark'>
            <h4 className='card-title' style={{color:'blue',fontSize:'35px'}}>Doctors</h4>
            <p className='card-text text-secondary'>
              <ol>
                <li>Diagnosis and treatment: Doctors are responsible for diagnosing and treating patients with medical conditions. They evaluate patients, order diagnostic tests, review test results, and develop treatment plans.</li>
                <li>Consultation: Doctors may also provide consultations to other healthcare professionals, such as nurses or therapists, to assist in patient care.</li>
                <li>Surgery: Some doctors are trained as surgeons and perform surgeries to treat medical conditions.</li>
                <li>Prescribing medication: Doctors may prescribe medication to manage symptoms or treat illnesses..</li>
                <li>Follow-up care: Doctors provide follow-up care to monitor patients' progress and adjust treatment plans as needed.</li>
                <li>Educating patients and families: Doctors may also educate patients and their families about medical conditions, treatments, and preventative measures..</li>
                <li>Research: Some doctors may conduct medical research to improve treatments or develop new therapies for medical conditions.</li>
              </ol>
            </p>
            <a href='#' className='btn btn-outline-success btn-lg '>Login</a>
            <a href='#' className='btn btn-outline-success  btn-lg' style={{marginLeft: '50px'}}>Register</a>
         </div>
    </div>
  )
}

export default Card1