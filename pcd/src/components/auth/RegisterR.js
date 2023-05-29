import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import './RegisterR.css'
import myvideo from '../../assets/myvideo.mp4'
import Typical from 'react-typical'
import logo from '../../assets/logodoc.png'
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
    <div className="background-video1" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>

         
        <section>
        <div className='login-box2' >
        <div className='doctsmartlogo2'>
  <a href="/" >
    <img src={logo} alt=''  />
  </a>
</div>
                <div className='form_heading'>
                    <h2>Welcome ,</h2>
                    <p style={{color:'#fff',fontSize:'20px',fontWeight:'500'}}>receptionnist registration</p>
                    
</div>
                <form >
                <div className='user-box'>
                        <input type="name" onChange={setVal}  value={inpval.fname} name="fname" id="fname" />
                        <label htmlFor='fname' style={{fontSize:'20px'}}>Name :</label><br/>

                    </div>
                    <div className='user-box'>
                    <input type="email" onChange={setVal} value={inpval.email} name="email" id="email"  />
                        <label htmlFor='email' style={{fontSize:'20px'}}>Email :</label><br/>
                        
                    </div>
                    <div className='user-box'>
                        <div className='two'>
                        <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password"  />
                        <div className='showpass' onClick={()=>setPassShow(!passShow)}>
                            {!passShow ? "Show":"Hide"}
                        </div>
                        <label htmlFor='password' style={{fontSize:'20px'}}>Password :</label><br/>

                        </div>
                        
                    </div>
                    <div className='user-box'>
                       
                        <div className='two'>
                        <input type={!cpassShow ? "password" : "text"} onChange={setVal} value={inpval.cpassword} name="cpassword" id="cpassword"/>
                        <div className='showpass' onClick={()=>setCPassShow(!cpassShow)}>
                            {!cpassShow ? "Show":"Hide"}
                        </div>
                        <label htmlFor='password' style={{fontSize:'20px'}}>Confirm Password :</label><br/>
                        </div>
                        
                    </div>
                    <a href="#" onClick={addUserdata}><span></span>
      <span></span>
      <span></span>
      <span></span>
      Sign up
    </a>
    <div>
    <p style={{color:'#fff',fontSize:'15px',fontWeight:'500',marginLeft:'25px'}}>Already have an Account ? <NavLink  style={{color:'#fff',position:'relative',top:'20px'}}  to="/recepauth">Login</NavLink></p>

    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default RegisterR