import './SiteNumber.css';
import React from 'react';
import CountUp from 'react-countup';
import {FaBed} from 'react-icons/fa'  //ambulance
import {FaStethoscope} from 'react-icons/fa'
import {BsClockHistory} from 'react-icons/bs'
import {FaHospitalUser} from 'react-icons/fa'
import {BiHappyBeaming} from 'react-icons/bi'
function NumberStats() {
  return (
    <div name ="stats" className='statcontainer'>
        <h1>Our stats</h1>
        <div className='row11'>
          <div className='servicescard'>
          <FaHospitalUser className='icons'/>
          <br></br>
          <CountUp end={350} duration={5}  className="numbers"/>
            <h2 className='servicetext'> Medical Staff</h2>
          </div>
          <div className='servicescard'>
          <FaBed className='icons'/>
          <br></br>
          <CountUp end={1000} duration={4}  className="numbers"/>
            <h2 className='servicetext'> beds </h2>
          </div>
          <div className='servicescard'>
          <FaStethoscope className='icons'/>
          <br></br>
          <CountUp end={800} duration={4}  className="numbers"/>
            <h2 className='servicetext'> Succesefull Operations </h2>
          </div>
          <div className='servicescard'>
          <BsClockHistory className='icons'/>
          <br></br>
          <CountUp end={20} duration={7}  className="numbers"/> 
            <h2 className='servicetext'> Year Experience </h2>
          </div>
          <div className='servicescard'>
          <BiHappyBeaming className='icons'/>
          <br></br>
          <CountUp end={20000} duration={6}  className="numbers">  </CountUp> 
            <h2 className='servicetext'> Happy Patient </h2>
          </div>


        </div>
      </div>
  );
}

export default NumberStats;
