import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './mix.css'

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
        <section>
           
            <div className='form_data' style={{width:'1500px',backgroundColor:'white'}}>
                <div className='form_heading'>
                    <h1>Welcome Back , Receptionist Login</h1>
                    <Typical
  steps={['Hi, Please login.', 1000, 'Enter your credentials.', 1000]}
  loop={Infinity}
  wrapper="h2" 
/>
                </div>
                <form >
                    <div className='form_input'>
                        <label htmlFor='email' style={{fontSize:'25px',marginBottom:'0.5px'}}>Email :</label><br/>
                        <input type="email"  onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address ' />
                    </div>
                    <div className='form_input' >
                        <label htmlFor='password' style={{fontSize:'25px',marginBottom:'0.5px'}}>Password :</label><br/>
                        <div className='two'>
                        <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your Password ' />
                        <div className='showpass' onClick={()=>setPassShow(!passShow)}>
                            {!passShow ? "Show":"Hide"}
                        </div>
                        </div>
                        
                    </div>
                    <button className='btn' onClick={loginuser}>Login</button>
                    <p style={{fontSize:'20px'}}>Don't have an Account ? <NavLink style={{color:'blue'}} to="/registerr">Sign Up</NavLink></p>
                </form>
            </div>
        </section> 
    



    // </div>
  )
}

export default LoginR