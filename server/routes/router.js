const express = require("express");
const router = new express.Router();
const recepdb = require("../models/RecepSchema");
var bcrypt=require("bcryptjs")
const authenticate = require('../middleware/authenticate')

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

module.exports = router;
