import React, { useState } from 'react';
import './RegistrationForm.css';
import './mix.css'

import Header from './Header';
import myvideo from '../../assets/video.mp4'
import Layout1 from '../receptionnist/Layout1';

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
    alert('Form submitted successfully!');
  };
  const [passShow,setPassShow]=useState(false)
  const [inpval,setInpval]=useState({
    firstName:"",
      lastName:"",
      email:"",
      password:"",
      address:"",
      city:"",
      state:"",
      zip:"",
      phone:"",
      blood:"",
      allergies:"",
      medications:"",
      conditions:""

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
    const { firstName,
      lastName,
       email, 
       password, 
       address,
       city,
       state,
       zip,
       phone,
       blood,
       allergies,
       medications,
       conditions}=inpval
    if(firstName===""){
     alert('please enter your firstname')
    }else if(lastName===""){
      alert('please enter your lastname')
     }else if(email ===''){
     alert('please enter your email')
    }else if(!email.includes("@")){
     alert('enter valid email')
    }else if(password ===''){
     alert('please enter your password')
    } else if(password.length< 8){
     alert("password must be 8 char")
    }else if(address===""){
      alert('please enter your address')
     }else if(city===""){
      alert('please enter your city')
     }else if(state===""){
      alert('please enter your state')
     }else if(zip===""){
      alert('please enter your zip')
     }else if(phone===""){
      alert('please enter your phone')
     }else if(blood===""){
      alert('please enter your blood')
     }else if(allergies===""){
      alert('please enter your name')
     }else if(medications===""){
      alert('please enter your medication')
     }else if(conditions===""){
      alert('please enter your condition')
     }
    else {
     try {
         const data= await fetch("/registerp",{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
              firstName,
              lastName,
               email, 
               password, 
               address,
               city,
               state,
               zip,
               phone,
               blood,
               allergies,
               medications,
               conditions
             })
         })
         const res=await data.json()
        console.log(res.status);
         if(res.status==201){
            alert("Patient registration done")
            setInpval({...inpval, firstName:"",
            lastName:"",
            email:"",
            password:"",
            address:"",
            city:"",
            state:"",
            zip:"",
            phone:"",
            blood:"",
            allergies:"",
            medications:"",
            conditions:""})
         }
         
     } catch (err) {
         console.log(err);
     }
    }
 }
  return (
    <div className='registrationdiv'>
   <Layout1>
    <div >
          
       
        <div className="form-container11">
  <div className="left-column">
    <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" onChange={setVal}  value={inpval.firstName} name="firstName" />
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" onChange={setVal}  value={inpval.lastName} name="lastName" />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email"onChange={setVal}  value={inpval.email} name="email" />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <div className='two11'>
                        <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your Password ' />
                        <div className='showpass' onClick={()=>setPassShow(!passShow)}>
                            {!passShow ? "Show":"Hide"}
                        </div>
                        </div>
    </div>

    <div className="form-group">
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" onChange={setVal}  value={inpval.address} name="address" />
    </div>

    <div className="form-group">
      <label htmlFor="city">City:</label>
      <input type="text" id="city" onChange={setVal}  value={inpval.city} name="city" />
    </div>

    <div className="form-group">
      <label htmlFor="state">State:</label>
      <input type="text" id="state" onChange={setVal}  value={inpval.state} name="state" />
    </div>
  </div>

  <div className="right-column">
    <div className="form-group">
      <label htmlFor="zip">Zip:</label>
      <input type="text" id="zip" onChange={setVal}  value={inpval.zip} name="zip" />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" onChange={setVal}  value={inpval.phone} name="phone" />
    </div>

    <div className="form-group">
      <label htmlFor="blood">Blood:</label>
      <input type="text" id="blood" onChange={setVal}  value={inpval.blood} name="blood" />
    </div>

    <div className="form-group">
      <label htmlFor="allergies">Allergies:</label>
      <input type="text" id="allergies" onChange={setVal}  value={inpval.allergies} name="allergies" />
    </div>

    <div className="form-group">
      <label htmlFor="medications">Medications:</label>
      <input type="text" id="medications" onChange={setVal}  value={inpval.medications} name="medications" />
    </div>

    <div className="form-group">
      <label htmlFor="conditions">Conditions:</label>
      <input type="text" id="conditions" onChange={setVal}  value={inpval.conditions} name="conditions" />
    </div>
  </div>

  <div className="button-container">
    <button className="btn btn-primary" onClick={addUserdata} >
      Submit
    </button>
  </div>
</div>
    </div>
    </Layout1>
    </div>
  );
};

export default RegistrationForm;