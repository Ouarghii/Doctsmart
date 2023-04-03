import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import './mix.css'
import myvideo from '../../assets/myvideo.mp4'
import Typical from 'react-typical'
const RegisterR = () => {
    const [passShow,setPassShow]=useState(false)
    const [cpassShow,setCPassShow]=useState(false)
    const [inpval,setInpval]=useState({
        fname:"",
        email:"",
        password:"",
        cpassword:""
    })
    

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
    const addUserdata = async(e)=>{
        e.preventDefault()
        const {fname,email,password,cpassword}=inpval
        if(fname===""){
         alert('please enter your name')
        }else if(email ===''){
         alert('please enter your email')
        }else if(!email.includes("@")){
         alert('enter valid email')
        }else if(password ===''){
         alert('please enter your password')
        } else if(password.length< 8){
         alert("password must be 8 char")
        }else if(cpassword ===''){
         alert('please enter your cpassword')
        } else if(cpassword.length< 8){
         alert("cpassword must be 8 char")
        }else if(password!==cpassword){
         alert('password and confirm password not match')
        }else {
         try {
             const data= await fetch("/register",{
                 method:"POST",
                 headers:{
                     "Content-Type":"application/json"
                 },
                 body:JSON.stringify({
                     fname,email,password,cpassword
                 })
             })
             const res=await data.json()
            console.log(res.status);
             if(res.status==201){
                alert("Receptionnist registration done")
                setInpval({...inpval,fname:"",email:"",password:"",cpassword:""})
             }
             
         } catch (err) {
             console.log(err);
         }
        }
     }
  return (
    <div className="background-video" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
    <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
  <source src={myvideo} type="video/mp4" />
</video>
         <Header />
        <section>
            <div className='form_data' style={{width:'1300px',backgroundColor:'white'}}>
                <div className='form_heading'>
                    <h1>Sign Up</h1>
                    <Typical
  steps={['Hi, Please Signup.', 1000, 'Enter your informations.', 1000]}
  loop={Infinity}
  wrapper="h2" 
/>
</div>
                <form >
                    <div className='form_input'>
                        <label htmlFor='fname' style={{fontSize:'25px',marginBottom:'0.5px'}}>Name :</label><br/>
                        <input type="name" onChange={setVal}  value={inpval.fname} name="fname" id="fname" placeholder='Enter Your Name ' />
                    </div>
                    <div className='form_input'>
                        <label htmlFor='email' style={{fontSize:'25px',marginBottom:'0.5px'}}>Email :</label><br/>
                        <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address ' />
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
                    <div className='form_input' >
                        <label htmlFor='password' style={{fontSize:'25px',marginBottom:'0.5px'}}>Confirm Password :</label><br/>
                        <div className='two'>
                        <input type={!cpassShow ? "password" : "text"} onChange={setVal} value={inpval.cpassword} name="cpassword" id="cpassword" placeholder='Confirm Password ' />
                        <div className='showpass' onClick={()=>setCPassShow(!cpassShow)}>
                            {!cpassShow ? "Show":"Hide"}
                        </div>
                        </div>
                        
                    </div>
                    <button className='btn' onClick={addUserdata}>Sign Up</button>
                    <p style={{fontSize:'20px'}}>Already have an Account ? <NavLink style={{color:'blue'}} to="/loginr">Login</NavLink></p>
                </form>
            </div>
        </section>
    </div>
  )
}

export default RegisterR