const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')

const keysecret="raslenraslenraslenraslenraslen"


const PatSchema=new mongoose.Schema({
   
    firstName:{
        type:String,
        required:true,
        trim:true
    },lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not valid email")
            }
        }
    },
    password:{
       type:String,
       required:true,
       minlength:8
    },
    address:{
        type:String,
        required:true,
        trim:true
    },city:{
        type:String,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },zip:{
        type:String,
        required:true,
        trim:true
    },phone:{
        type:String,
        required:true,
        unique:true,
    },blood:{
        type:String,
        required:true,
    },
    allergies:{
        type:String,
        required:true,
    },
    medications:{
        type:String,
        required:true,
    },
    conditions:{
        type:String,
        required:true,
    },
     tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
     ]

})



//hash password
PatSchema.pre("save",async function(next){

    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12)
        
    }
   

    next()
})


//token generate
PatSchema.methods.generateAuthtoken=async function(){
   try {
      let token23= jwt.sign({ _id: this._id }, keysecret, {
        expiresIn: "1d"
      });

      this.tokens=this.tokens.concat({token:token23})
      await this.save()
      return token23
   } 
   catch (error) {
     res.status(422).json(error)
   }
}




//creating model

const patientdb=new mongoose.model("Patient",PatSchema)


module.exports = patientdb;