const docModel=require('../models/DocSchema')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
const doctorModel=require('../models/doctorModel')
const keysecret="raslenraslenraslenraslenraslen"
//register
const registerController=async(req,res)=>{
    try {
        const existingDoc=await docModel.findOne({email:req.body.email})
        if(existingDoc){
            return res.status(200).send({message:'Doctor Already Exist',success:false})
        }
        const password=req.body.password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        req.body.password=hashedPassword
        const newDoc=new docModel(req.body)
        await newDoc.save()
        res.status(201).send({message:'Register Successfully',success:true})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:`Register Controller ${error.message}`})
    }
    
}

const loginController=async(req,res)=>{
    try {
        const doctor=await docModel.findOne({email:req.body.email})
        if(!doctor){
            return res.status(200).send({message:'user not found',success:false})
        }
        const isMatch=await bcrypt.compare(req.body.password,doctor.password)
        if(!isMatch){
            return res.status(200).send({message:'Invalid Email or Password',success:false})
        }const token=jwt.sign({id:doctor._id},keysecret,{expiresIn:'1d'})
        res.status(200).send({message:'Login Success',success:true,token:token})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:`Error in Login CTRL${error.message}`})
    }
}

const authController=async(erq,res)=>{
    try {
        const doctor=await docModel.findOne({_id:req.body.doctorId})
        if(!doctor){
            return res.status(200).send({
                message:'doctor not found',
                success:false
            })
        }else{
            res.status(200).send({
                success:true,
                data:{
                    username:doctor.username,
                    email:doctor.email,
                    
                }
            })
        }
    } catch (error) {
        console.log(error);
        req.status(500).send({
            message:'auth error',
            success:false,
            error
        })
    }
}
const applyDoctorController = async (req, res) => {
    try {
      const newDoctor = new doctorModel({ ...req.body, status: 'pending' });
      await newDoctor.save();
  
      const adminUser = await userModel.findOne({ isAdmin: true });
      const notification = adminUser.notification;
  
      notification.push({
        type: 'apply-doctor-request',
        message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for a doctor account.`,
        data: {
          doctorId: newDoctor._id,
          name: newDoctor.firstName + ' ' + newDoctor.lastName,
          onClickPath: '/doctorapp/doctors',
        },
      });
  
      await userModel.findByIdAndUpdate(adminUser._id, { notification });
      res.status(201).send({
        success: true,
        message: 'Doctor account applied successfully.',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error: error.message,
        message: 'Error while applying for doctor.',
      });
    }
  };
  

module.exports={loginController,registerController,authController,applyDoctorController}