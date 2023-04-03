import React from 'react'
import p1 from '../assets/p1.jpg'
import P from '../assets/P.png'
import './card.css'
const Card2 = (props) => {
  
  return (
    <div className='card text-center'>
         <div className='overflow'>
            <img  src={P} alt='image1' className='img card-img-top'></img>
         </div>
         <div className='card-body text-dark'>
            <h4 className='card-title' style={{color:'blue',fontSize:'35px'}}>Patients</h4>
            <p className='card-text text-secondary'>
              <ol>
                <li>Communicate your medical history and current symptoms: Be honest and open with your healthcare providers about your medical history and any current symptoms you may be experiencing. This information is essential for accurate diagnosis and treatment.</li>
                <li>Ask questions: Don't be afraid to ask questions about your condition, treatment plan, and medications. You have the right to understand what is happening to your body and the options available to you.</li>
                <li>Follow instructions: It's important to follow the instructions given by your healthcare providers, including taking medications as prescribed, attending appointments and tests, and following any dietary or activity restrictions.</li>
                <li>Participate in your care: Participate in your care by advocating for yourself and your needs. Let your healthcare providers know if you are experiencing any discomfort, pain, or side effects from medication.</li>
                <li>Maintaining personal hygiene: Patients should take responsibility for their own personal hygiene, such as bathing, brushing their teeth, and changing their clothes.</li>
                
              </ol>
            </p>
            <a href='#' className='btn btn-outline-success btn-lg mr-8'  >Login</a>
            <a href='#' className='btn btn-outline-success  btn-lg'style={{marginLeft: '50px'}}>Register</a>
         </div>
    </div>
  )
}

export default Card2