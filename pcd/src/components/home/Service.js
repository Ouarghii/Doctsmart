import React from 'react'
import emergency from '../../assets/Emergency.jpg'
import outpatient from '../../assets/Inpatient.jpg'
import inpatient from '../../assets/Outpatient.jpg'
import Surgery from '../../assets/Surgery.jpg'
import Gyn from '../../assets/Gyn.jpg'
import Oncology from '../../assets/Oncology.jpg'
import bg from '../../assets/bgc.jpg'

import './Service.css'

const Service = () => {
  return (
    <div name="Services" className='doctservices'>
        
        <div className='servicecard'>
            <img src={emergency} className='servicecard-image' alt='' />
            <div className='servicecard-body'>
                <h1 className='servicecard-title'>Emergency care </h1>
                <p className='servicecard-info'>We are equipped to handle a wide range of medical emergencies, 
              including heart attacks, strokes and other life-threatening conditions.</p>
                <p></p>
            </div>
        </div>
        <div className='servicecard'>
            <img src={inpatient} className='servicecard-image' alt='' />
            <div className='servicecard-body'>
                <h1 className='servicecard-title'> Inpatient care </h1>
                <p className='servicecard-info'>We provide care for patients who require overnight stays or extended hospitalization 
              like  treatment for serious illnesses</p>
                <p></p>
            </div>
        </div>
        <div className='servicecard'>
            <img src={outpatient} className='servicecard-image' alt='' />
            <div className='servicecard-body'>
                <h1 className='servicecard-title'>Outpatient care </h1>
                <p className='servicecard-info'>medical services provided to individuals who do not require overnight hospitalization, allowing them to receive treatment and return home on the same day.</p>
                <p></p>
            </div>
        </div>
        <div className='servicecard'>
            <img src={Surgery} className='servicecard-image' alt='' />
            <div className='servicecard-body'>
                <h1 className='servicecard-title'>Surgery </h1>
                <p className='servicecard-info'>Hospitals have surgical facilities and staff
               that can perform a variety of procedures, 
              from routine surgeries to complex operations.</p>
                <p></p>
            </div>
        </div>
        <div className='servicecard'>
            <img src={Gyn} className='servicecard-image' alt='' />
            <div className='servicecard-body'>
                <h1 className='servicecard-title'>Obstetrics and gynecology </h1>
                <p className='servicecard-info'>Hospitals provide care for pregnant women, including prenatal care, labor and delivery,
               and postpartum care.</p>
                <p></p>
            </div>
        </div>
        <div className='servicecard'>
            <img src={Oncology} className='servicecard-image' alt='' />
            <div className='servicecard-body'>
                <h1 className='servicecard-title'>Oncology </h1>
                <p className='servicecard-info'>We provide treatment and support for cancer patients, including chemotherapy,
               radiation therapy, and other cancer-related services.</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Service