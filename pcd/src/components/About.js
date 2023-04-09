import React from 'react'
import './about.css'
import img1 from '../assets/3aftoula1.jpg';
import img2 from '../assets/3aftoula2.jpg';
import img3 from '../assets/3aftoula3.jpg';
import ddd from '../assets/ddd.png'
import {useState, useEffect} from 'react';
import NumberStats from './SiteNumbers';
const About = () => {
    
    return (
      <div >
        <div className='bgre'>
        <h1 style={{fontWeight:'bold'}}>About Us</h1>
        <div  className='container1' style={{marginTop:'20px'}}>
          
          <div className='kafka' style={{display:'flex'}}>
             <img src={ddd} alt='' style={{width:'40%'}}  />
            <div className='kafkacon' style={{width:'60%',marginRight:'50px',marginTop:'60px'}}>
              <h2 style={{fontSize:'50px',fontWeight:'bold'}}>We Take Care Of Your Healthy Life</h2>
              <p style={{fontSize:'30px',background:'white'}}>We will emphasize the importance of communication and coordination between receptionists, doctors, and patients to ensure quick and effective treatment. 'DocSmart' will aim to improve the collection and analysis of medical data to provide superior quality care. Advanced technologies such as artificial intelligence and deep learning will be used to quickly analyze patient data, diagnose diseases, and recommend real-time treatments. Specifically, we will use deep learning to analyze the health data of each patient to detect symptoms and predict diseases.</p>
            </div>
          </div>
        </div>
        </div>
        {/* <div style={{marginTop:'540px'}}>
        <NumberStats />
        </div> */}
         
        
      </div>
        
      );
    };
    
export default About;