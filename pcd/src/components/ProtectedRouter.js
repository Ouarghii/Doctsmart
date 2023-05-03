import React, { useEffect } from 'react';
import { Navigate, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { setDoctor } from '../redux/features/doctorSlice';

export default function ProtectedRoute({ children }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { doctor } = useSelector((state) => state.doctor);

  const getDoctor = async () => {
    try {
      dispatch(showLoading())
      const res=await axios.post('/getDoctorData',{
        doctorId: doctor.doctorId,token: localStorage.getItem('token')},
        {headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }
      )
      dispatch(hideLoading())
      if(res.data.success){
        dispatch(setDoctor(res.data.data))
      }else{
        history.push('/doctorauth')
        localStorage.clear()
        return null;
      }
    } catch (error) {
      dispatch(hideLoading());
      localStorage.clear()
       console.log(error);
    }
  };

  useEffect(()=>{
     if(!doctor){
      getDoctor()
     }
  },[doctor])

  if(localStorage.getItem('token')){
    return children
   }else{
    history.push('/doctorauth');
    return null;
   }

}
