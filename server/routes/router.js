const express = require("express");
const router = new express.Router();
const recepdb = require("../models/RecepSchema");
const patientdb=require("../models/PatSchema")
const mongoose=require('mongoose')
const Appointment=require('../models/appointmentSchema')
var bcrypt=require("bcryptjs")
const authenticate = require('../middleware/authenticate')
const authentificatep=require('../middleware/authentificatep');
const { loginController, registerController, authController,applyDoctorController } = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");
const docModel = require("../models/DocSchema");

// for  receptionnist registration
router.post("/register", async (req, res) => {
  const { fname, email, password, cpassword } = req.body;
  if (!fname || !email || !password || !cpassword) {
    res.status(422).json({ error: "fill all the details" });
  }

  try {
    const prerecep = await recepdb.findOne({ email: email });
    if (prerecep) {
      res.status(422).json({ error: "This Email is Aleady Exist" });
    } else if (password !== cpassword) {
      res
        .status(422)
        .json({ error: "Password and Confirm password not match" });
    } else {
      const finalRecep = new recepdb({
        fname,
        email,
        password,
        cpassword,
      });

      //here password hasting
      const storeData = await finalRecep.save();
      //console.log(storeData);
      res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
});
// user login
router.post("/login", async (req, res) => {
  // console.log(req.body)
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "fill all the details" });
  } try{
       const RecepValid=await recepdb.findOne({email:email})
       if(RecepValid){
        const isMatch =await  bcrypt.compare(password,RecepValid.password)
        
        if(!isMatch){
            res.status(422).json({ error: "invalid details" });
        }else{

            //token generate
            const token =await RecepValid.generateAuthtoken()
         
            //cookiegenerate
            res.cookie("recepcookie",token,{
              expires:new Date(Date.now()+9000000),
              httpOnly:true
            })

            const result={
              RecepValid,
              token
            }
            res.status(201).json({status:201,result})
        }

       }
  }catch (error){
     res.status(401).json(error)
     console.log("catch block")
  }
});



//Recep Valid
router.get("/RecepValid", authenticate, async (req, res) => {
  try {
    const ValidRecepOne = await recepdb.findOne({ _id: req.recepId });
    if (ValidRecepOne) {
      res.status(201).json({ status: 201, ValidRecepOne });
    } else {
      return res.status(404).json({ error: "Recep not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ status: 401, error });
  }
});


// recep logout
router.get("/logout",authenticate,async(req,res)=>{
  try {
    req.rootUser.tokens=req.rootUser.tokens.filter((curelem)=>{
      return curelem.token !==req.token
    })

    res.clearCookie("recepcookie",{path:"/"})

    req.rootUser.save()
    res.status(201).json({status:201})
   
  } catch (error) {
    res.status(401).json({status:401,error})
  }
})
// for  patient registration
router.post("/registerp", async (req, res) => {
  const { firstName, lastName, email, password, address, city, state, zip, phone, blood, allergies, medications, conditions } = req.body;
  if (!firstName || !lastName || !password || !email || !address || !city || !state || !zip || !phone || !blood || !allergies || !medications || !conditions) {
    res.status(422).json({ error: "Please fill in all the details" });
    return;
  }

  try {
    const prepat = await patientdb.findOne({ email: email });
    if (prepat) {
      res.status(422).json({ error: "This email already exists" });
    } else {
      const finalPat = new patientdb({
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
      });

      // Hashing the password before storing it
      const salt = await bcrypt.genSalt(10);
      finalPat.password = await bcrypt.hash(password, salt);

      const storedData = await finalPat.save();
      res.status(201).json({ status: 201, data: storedData });
    }
  } catch (error) {
    res.status(422).json({ error: error.message });
    console.log(error);
  }
});

// patient login
router.post("/loginp", async (req, res) => {
  // console.log(req.body)
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "fill all the details" });
  } try{
       const PatientValid=await patientdb.findOne({email:email})
       if(PatientValid){
        const isMatch =await  bcrypt.compare(password,PatientValid.password)
        
        if(!isMatch){
            res.status(422).json({ error: "invalid details" });
        }else{

            //token generate
            const token =await PatientValid.generateAuthtoken()
         
            //cookiegenerate
            res.cookie("patientcookie",token,{
              expires:new Date(Date.now()+9000000),
              httpOnly:true
            })

            const result={
              RecepValid,
              token
            }
            res.status(201).json({status:201,result})
        }

       }
  }catch (error){
     res.status(401).json(error)
     console.log("catch block")
  }
});
//Patient Valid
router.get("/PatientValid",authentificatep,async(req,res)=>{
  //  console.log("done");
  try {
    const ValidPatientOne=await patientdb.findOne({_id:req.patientId})
    res.status(201).json({status:201,ValidPatientOne})
  } catch (error) {
    res.status(401).json({status:401,error})
  }
})
// recep logout
router.get("/logoutp",authentificatep,async(req,res)=>{
  try {
    req.rootUser.tokens=req.rootUser.tokens.filter((curelem)=>{
      return curelem.token !==req.token
    })

    res.clearCookie("patientcookie",{path:"/"})

    req.rootUser.save()
    res.status(201).json({status:201})
   
  } catch (error) {
    res.status(401).json({status:401,error})
  }
})



//  all patient 
router.get("/allpatients", async (req, res) => {
  try {
    const patients = await patientdb.find({}, { firstName: 1, lastName: 1, email: 1, phone: 1, blood: 1, _id: 0 });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get('/allpatients/:id', async (req, res) => {
  const _id=req.params.id
  try {
    const patient = await patientdb.findOne({ _id});
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
//update patient
router.put("/allpatients/:id", async (req, res) => {
  const { firstName, lastName, email, phone, blood } = req.body;

  try {
    const updatedPatient = await patientdb.findOneAndUpdate(
      { _id: req.params.id },
      { firstName, lastName, email, phone, blood },
      { new: true }
    );
    if (!updatedPatient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).json({ success: "Patient updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


//delete patient
router.delete('/allpatients/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const patient = await patientdb.findByIdAndDelete(id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//doctor
//login doctor ||POST
router.post('/doclogin',loginController)
//register doctor  ||post
router.post('/docregister',registerController)
//home ||POST
router.post('/getDoctorData',authMiddleware,authController)
router.get('/alldoctors', async (req, res) => {
  try {
    const doctors = await docModel.find();
    res.status(200).send({ success: true, doctors: doctors });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: `Error in fetching doctors ${error.message}` });
  }
});
//home ||POST
router.post('/apply-doctor',authMiddleware,applyDoctorController)

//create appointment
router.post('/appointments', async (req, res) => {
  const appointment = new Appointment(
   req.body
  );
  await appointment.save()
  .then(() => {
    res.status(201).send(appointment);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error creating appointment');
  });
});

  // Get all appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.send(appointments);
  } catch (error) {
    res.status(500).send();
  }
});


// Get a single appointment by id
router.get('/appointments/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const appointment = await Appointment.findById(_id);
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (error) {
    res.status(500).send();
  }
});

// Update an appointment by id
router.patch('/appointments/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'phone', 'date', 'time', 'note'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).send();
    }

    updates.forEach((update) => (appointment[update] = req.body[update]));
    await appointment.save();

    res.send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an appointment by id
router.delete('/appointments/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (error) {
    res.status(500).send();
  }
});

  

module.exports = router;
