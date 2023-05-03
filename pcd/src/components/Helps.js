import React, { useState } from 'react'
const Helps = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message,setMessage]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Date: ", date);
    console.log("Message",message)
  }
  return (
    <div >
        <p style={{color:'black',marginBottom:'30px',fontSize:'20px',marginBottom:'20px'}}>WE ALWAY READY HELPS YOU</p><br/>
        <div style={{background:'gray'}}>
        <form onSubmit={handleSubmit} style={{background:'white'}} className="help-form">
        
        <h3 style={{fontSize:'50px'}}><span style={{color:'blue',marginTop:'20px'}}>Book An </span> Appointment</h3>
            <div className='inputs' >
            <div >
       
        <input type="text" placeholder='Enter your name ' value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
     
      <div>
        
        <input type="email" placeholder='demo@yourmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        
        <input type="number" value={phone} placeholder='Phone' onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
            </div>

      <div>
      <div className='textarea'>
        
        <textarea placeholder='Your message here ....' value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
     
      <button className='button' type="submit">MAKE AN APPOINTMENT</button>
      </div>
      
    </form>
    </div>
    </div>
  )
}

export default Helps