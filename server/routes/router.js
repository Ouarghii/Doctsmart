const express = require("express");
const router = new express.Router();
const recepdb = require("../models/RecepSchema");
const patientdb=require("../models/PatSchema")
var bcrypt=require("bcryptjs")
const authenticate = require('../middleware/authenticate')
const authentificatep=require('../middleware/authentificatep');
const { loginController, registerController, authController } = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");

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
router.get("/RecepValid",authenticate,async(req,res)=>{
  //  console.log("done");
  try {
    const ValidRecepOne=await recepdb.findOne({_id:req.recepId})
    res.status(201).json({status:201,ValidRecepOne})
  } catch (error) {
    res.status(401).json({status:401,error})
  }
})


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
  const {firstName,lastName, email, password, address,city,state,zip,phone,blood,allergies,medications,conditions } = req.body;
  if (!firstName || !lastName || !password || !email ||!address||!city ||!state ||!zip ||!phone ||!blood || !allergies ||!medications ||!conditions ) {
    res.status(422).json({ error: "fill all the details" });
  }

  try {
    const prepat = await patientdb.findOne({ email: email });
    if (prepat) {
      res.status(422).json({ error: "This Email is Aleady Exist" });
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

      //here password hasting
      const storeData = await finalPat.save();
      //console.log(storeData);
      res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
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

//doctor
//login doctor ||POST
router.post('/doclogin',loginController)
//register doctor  ||post
router.post('/docregister',registerController)
//home ||POST
router.post('/getDoctorData',authMiddleware,authController)




module.exports = router;
