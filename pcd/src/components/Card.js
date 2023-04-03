import React from 'react'
import p1 from '../assets/p1.jpg'
import R from '../assets/R.png'
import './card.css'
const Card = (props) => {

  return (
    <div className='card text-center'>
         <div className='overflow'>
            <img  src={R} alt='image1' className='img card-img-top'></img>
         </div>
         <div className='card-body text-dark'>
            <h4 className='card-title' style={{color:'blue',fontSize:'35px'}}>Receptionist</h4>
            <p className='card-text text-secondary'>
              <ol>
                <li>Greeting and checking in patients: The receptionist is usually the first point of contact for patients when they enter the hospital. They greet patients, check them in, and provide them with any necessary forms or paperwork.</li>
                <li>Answering phone calls: The receptionist is responsible for answering phone calls and directing them to the appropriate departments or personnel. They may also provide basic information to callers.</li>
                <li>Scheduling appointments: The receptionist schedules appointments for patients with doctors, nurses, and other healthcare professionals. They may also reschedule appointments as needed.</li>
                <li>Maintaining patient records: The receptionist ensures that patient records are properly maintained and updated. They may also help patients fill out paperwork or forms related to their medical history.</li>
                <li>Coordinating with other hospital staff: The receptionist communicates with other hospital staff, such as nurses and doctors, to ensure that patient needs are met and appointments are scheduled in a timely manner.</li>
                <li>Providing general assistance: The receptionist may provide general assistance to patients, such as helping them find their way around the hospital, providing them with information about hospital services, and answering any questions they may have.</li>
              </ol>
            </p>
            <a href='#' className='btn btn-outline-success btn-lg mr-8'>Login</a>
            <a href='#' className='btn btn-outline-success  btn-lg' style={{marginLeft: '50px'}}>Register</a>
         </div>
    </div>
  )
}

export default Card