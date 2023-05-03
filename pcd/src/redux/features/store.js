import {configureStore} from  '@reduxjs/toolkit'
import { alertSlice } from './alertSlice'
import {userSlice} from './userSlice1'
import { doctorSlice } from './doctorSlice'

export default configureStore({
    reducer:{
        alerts:alertSlice.reducer,
        doctor:doctorSlice.reducer
       
    }
})