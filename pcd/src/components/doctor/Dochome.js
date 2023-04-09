import React,{useEffect} from 'react'
import axios from 'axios'
const Dochome = () => {
  //login user data
  const getDoctorData=async()=>{
    try {
      const res=await axios.post('/getDoctorData',{},{
        headers:{
          Authorization:'Bearer'+localStorage.getItem('token')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <h1>Home Page</h1>
    </div>
  )
}

export default Dochome