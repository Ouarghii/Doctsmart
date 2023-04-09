import React from 'react'
import './diag.css'
import {BsHeartPulseFill} from'react-icons/bs'
import {FaLaptopMedical} from 'react-icons/fa'
import Footer from './Footer'
const Diag = () => {
  return (
    <div>
        <div  style={{marginBottom:'50px'}}>
        <p style={{color:'black'}}>OUR SERVICES</p>
        <h1><span style={{color:'Blue',fontWeight:'bold',fontSize:'55px'}}>Best Solution</span> For Your Health</h1>
        </div>
        
    <div style={{display:'flex'}} className='container '>
        <div className='diag1' style={{display:'flex'}}>
           <div>
               <h1 style={{fontSize:'30px'}}>DIAGNOSE</h1>
               <p style={{fontSize:'20px',color:'black'}}>Examination & Diagnosis</p>
            </div>
            <div>
               <BsHeartPulseFill className='diagicon' size='50px' style={{color:'blue'}}/>
            </div>
        </div>
        <div className='diag2 ' style={{display:'flex'}}>
           <div>
               <h1 style={{fontSize:'30px'}}>TREATMENT</h1>
               <p style={{fontSize:'20px',color:'black'}}>Treatment of the disease</p>
            </div>
            <div>
               <FaLaptopMedical className='diagicon' size='50px' style={{color:'blue'}}/>
            </div>
        </div>
        <div className='diag3' style={{display:'flex'}}>
           <div>
               <h1 style={{fontSize:'30px'}}>CARE HEALTHY</h1>
               <p style={{fontSize:'20px',color:'black'}}>Care and recuperation</p>
            </div>
            <div>
               <BsHeartPulseFill className='diagicon' size='50px' style={{color:'blue'}}/>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Diag