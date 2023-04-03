import React from 'react'
import './favs.css'
import {BsJournalMedical} from 'react-icons/bs'
import {GiDoctorFace,GiMicroscope} from 'react-icons/gi'
import {FaAmbulance} from'react-icons/fa'
import {MdBloodtype} from 'react-icons/md'
import {BiHandicap} from 'react-icons/bi'
import doc from '../assets/doc.jpg'
const Fav = () => {
  return (<div >
    <div className='favorite'></div>
    <p style={{color:'black',marginLeft:'20px',marginBottom:'10px',fontSize:'20px'}}>WHY CHOOSE HOPE MEDICAL</p>
    <p style={{color:'black',fontSize:'40px',marginBottom:'50px'}}><span style={{fontWeight:'bold',color:'blue'}}>The Best </span>For Your Health</p>
       <div  className='principal'>
       <div className='favs'>
  <div className='fav1' >
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
    <h4 style={{marginRight:'25px'}}>MEDICAL COUNSELING</h4>
    <BsJournalMedical style={{color:'blue'}} size='40px'/>
    </div>
   
  </div>
  <div className='fav2' >
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
    <h4 style={{marginRight:'25px'}}>TOP LEVELS DOCTORS</h4>
    <GiDoctorFace  style={{color:'blue'}} size='40px'/>
    </div>
    
  </div>
  <div className='fav3' >
    <div  style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
    <h4 style={{marginRight:'25px',fontSize:'25px'}}>MEDICAL FACILITES</h4>
    <GiMicroscope  style={{color:'blue'}} size='40px' />
    </div>
  </div>
  <div className='fav4' >
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
    <h4 style={{marginRight:'25px'}}>24 HOURS SERVICES</h4>
    <FaAmbulance style={{color:'blue'}} size='40px'/>
    </div>
    
  </div>
  <div className='fav5' >
  <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
  <h4 style={{marginRight:'25px'}}>PERSONAL SERVICES</h4>
    <MdBloodtype style={{color:'blue'}} size='40px'/>
  </div>
    
  </div>
  <div className='fav6'>
 <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
    <h4 style={{marginRight:'25px'}}>DEDICATED PATIENT CARE</h4>
    <BiHandicap style={{color:'blue'}} size='40px'/>
 </div>
   
  </div>
</div>
<div className='image'>
    <img src={doc} alt='' />
</div>
        
    </div>
  </div>
   
  )
}

export default Fav