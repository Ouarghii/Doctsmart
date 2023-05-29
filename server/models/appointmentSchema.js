const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')


const appointmentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      
    },
  });

    // Define appointment model
    const Appointment = mongoose.model('Appointment', appointmentSchema);

    module.exports =Appointment