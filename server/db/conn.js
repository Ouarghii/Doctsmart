const mongoose =require("mongoose")

const DB= "mongodb+srv://raslen:warghui110@cluster0.hyiimux.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Data Base Connected")).catch((err)=>{
    console.log(err)
})