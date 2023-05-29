import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import back from '../../assets/back.jpg'
import './LoginR.css'
import logo from '../../assets/logodoc.png'

import Typical from 'react-typical';
import {useHistory} from 'react-router-dom'

const LoginR = () => {
    const [passShow,setPassShow]=useState(false)
    const [inpval,setInpval]=useState({
        
        email:"",
        password:""
       
    })
    const history=useHistory()
    console.log(inpval)
    const setVal=(e)=>{
        //    console.log(e.target.value);
        const {name,value}=e.target;
        setInpval(()=>{
            return {
                ...inpval,
                [name]:value
            }
        })
    }
    const loginuser=async(e)=>{
        e.preventDefault()
        const {email,password}=inpval
         if(email ===''){
            alert('please enter your email')
           }else if(!email.includes("@")){
            alert('enter valid email')
           }else if(password ===''){
            alert('please enter your password')
           } else if(password.length< 8){
            alert("password must be 8 char")
           }else {
            // console.log("user login succesfully done")
            try {
                const data= await fetch("/login",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        email,password
                    })
                })
                const res=await data.json()
            //    console.log(res);
                if(res.status===201){           
                   localStorage.setItem("recepsdatatoken",res.result.token)
                   history.push("/dash/patients")
                   setInpval({...inpval,email:"",password:""})
                }else{
                    alert("details invalid")
                }
                
            } catch (err) {
                console.log(err);
            }
           }
    }
    
  return (
    
     <div className="background-video" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
           {/* <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <source src={myvideo} type="video/mp4" />
      </video> */}
        <section >
           
           
            <div className='login-box' >
            <div className='doctsmartlogo'>
            <a href="/" >
    <img src={logo} alt=''  />
  </a>
            </div>
                <div className='form_heading'>
                    <h2>Welcome Back </h2>
                    <p style={{color:'#fff',fontSize:'20px',fontWeight:'500'}}>receptionnist login</p>
                    
                </div>
                <form className='recepform'>
                    <div className='user-box'>
                        
                        <input type="email"  onChange={setVal} value={inpval.email} name="email" id="email"  />
                        <label htmlFor='email'>Email :</label><br/>
                    </div>
                    <div className='user-box' >
                        
                        <div className='two'>
                        <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password"  />
                        <div style={{marginLeft: '20px'}} className='showpass' onClick={()=>setPassShow(!passShow)}>
                            {!passShow ? "Show":"Hide"}
                        </div>
                        <label htmlFor='password' >Password :</label><br/>
                        </div>
                        
                    </div>
                    <a href="#" onClick={loginuser}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    <div>
    <p style={{color:'#fff',fontSize:'15px',fontWeight:'500',marginLeft:'25px'}}>Don't have an Account ?
                    <NavLink className="signupbtn" style={{color:'#fff'}} to="/registerr">Sign Up</NavLink>
                    </p> 
    </div>
                   
                </form>
            </div>
        </section> 
    



    // </div>
  )
}

export default LoginR