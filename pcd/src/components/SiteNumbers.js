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
    <div className='container1'>
        <h1>Our stats</h1>
        <div className='row11'>
          <div className='services11'>
          <FaHospitalUser className='icons'/>
          <br></br>
          <CountUp end={350} duration={5}  className="numbers"/>
            <h2> Medical Staff</h2>
          </div>
          <div className='services11'>
          <FaBed className='icons'/>
          <br></br>
          <CountUp end={1000} duration={4}  className="numbers"/>
            <h2> beds </h2>
          </div>
          <div className='services11'>
          <FaStethoscope className='icons'/>
          <br></br>
          <CountUp end={800} duration={4}  className="numbers"/>
            <h2> Succesefull Operations </h2>
          </div>
          <div className='services11'>
          <BsClockHistory className='icons'/>
          <br></br>
          <CountUp end={20} duration={7}  className="numbers"/> 
            <h2> Year Experience </h2>
          </div>
          <div className='services11'>
          <BiHappyBeaming className='icons'/>
          <br></br>
          <CountUp end={20000} duration={6}  className="numbers">  </CountUp> 
            <h2> Happy Patient </h2>
          </div>


        </div>
      </div>
  );
}

export default NumberStats;
