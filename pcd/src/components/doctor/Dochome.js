import React,{useEffect} from 'react'
import axios from 'axios'
import Layout from '../Layout'
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
  useEffect(()=>{
    getDoctorData()
  })
  return (
    <Layout/>
  )
}

export default Dochome