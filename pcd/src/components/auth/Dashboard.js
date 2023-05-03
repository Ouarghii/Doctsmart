import React, {useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import rec from '../../assets/Rec.png'
import { LoginContext } from '../ContextProvider/Context'
import Header from './Header'
import login from '../../assets/login.png'
import profile from '../../assets/landing.png'
import landing from '../../assets/lan.png'
import  './dash.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Fav from '../../components/Fav'
import { Button } from '@mui/material'
import reception from '../../assets/reception.mp4'
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
  const {logindata,setLoginData} = useContext(LoginContext)
  // console.log(logindata.ValidRecepOne?.email);
  const history = useHistory()

  const DashboardValid = async () => {
     let token = localStorage.getItem("recepsdatatoken")
     
     const res = await fetch("/RecepValid", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
     })
     const data = await res.json()
     if (data.status === 401 || !data) {
       history("*")
     } else {
        console.log("user verify")
        setLoginData(data)
        history("/dash")
     }
  }

  useEffect(() => {
    DashboardValid()
  }, [])
  return (
    <div>
    <div className="background-video" style={{ top: 0, left: 0 }}>
    
        <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '90%' }}>
        
        <source src={reception} type="video/mp4" />
      </video>
      <Header />
       <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
       
         {/* <img src={rec} style={{width:'200px',marginTop:'20'}} alt='' /> */}
         {/* {logindata.ValidRecepOne && <h1>Receptionist Email: {logindata ? logindata.ValidRecepOne.email:""}</h1>} */}

       </div>
       <div className='blaka' style={{background:'#F8F8F8',width:'65%',display:"flex",flexDirection:"column",alignItems:"center", margin:"auto", borderRadius: '10px', padding: '20px'}}>
  <span style={{fontSize:'25px',marginBottom:'5px',color:'black'}}>Hello sir,😍</span>
  <p style={{fontSize:'25px',color:'black'}}>Are you a new patient here or have you visited us before?</p>
  <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", margin:"auto", width: '30%'}}>
    <Link to='/registerp'>
    <button className='bttun' style={{flex: 1, backgroundColor: 'black', color: 'white', height: '50px', borderRadius: '10px', margin: '5px',cursor:'pointer'}}>If you are new here</button>
      </Link>
  
  <button className='bttun' style={{flex: 1, backgroundColor: 'gray', color: 'white', height: '50px', borderRadius: '10px', margin: '5px',width:'150px'}}>If you visited us before</button>
</div>
</div>
</div>
       <h2 style={{color:'blue',marginTop:'25px'}}>Informations : </h2>
      
       <section class="block relative z-1 bg-blueGray-600">
  <div class="container mx-auto">
    <div class="flex-container justify-center">
      <div class="flex-item">
        <h5 class="text-xl font-semibold pb-4 text-center">Login Page</h5>
        <Link to="/loginr">
          <div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
            <img alt="..." class="align-middle border-none max-w-full h-auto rounded-lg" src={login} />
          </div>
        </Link>
      </div>
      <div class="flex-item">
        <h5 class="text-xl font-semibold pb-4 text-center">Landing Page</h5>
        <Link to="/">
          <div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
            <img alt="..." class="align-middle border-none max-w-full h-auto rounded-lg" src={landing} />
          </div>
        </Link>
      </div>
      <div class="flex-item">
        <h5 class="text-xl font-semibold pb-4 text-center">Profile Page</h5>
        <Link to="/profile">
          <div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
            <img alt="..." class="align-middle border-none max-w-full h-auto rounded-lg" src={profile} />
          </div>
        </Link>
      </div>

    
    </div>
  </div>
  <Fav style={{margintop:'5px'}}/>
</section>

</div> 
    
  )
}

export default Dashboard