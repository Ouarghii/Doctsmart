const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')

const DocSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is require']
    },
    email:{
        type:String,
        required:[true,'email is require'],
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not valid email")
            }
        }
    },
    password:{
        type:String,
        required:[true,'password is require'],
        minlength:8
    }
})
const docModel=mongoose.model('doctors',DocSchema)

module.exports=docModel