const mongoose=require("mongoose");

const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },

})


const ragister=mongoose.model("ragister",loginSchema);
module.exports=ragister