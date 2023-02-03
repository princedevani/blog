const mongoose=require("mongoose");
const jwt = require('jsonwebtoken');


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
    type:{
        type: String, 
        default: 'Auther'
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

loginSchema.methods.generateAuthToken = async function () {
    const ragister = this
    const token = jwt.sign({ _id: ragister._id.toString()}, process.env.JWT_SECRET)
    
    ragister.tokens = ragister.tokens.concat({ token })
    await ragister.save()
    
    return token
  }



const ragister=mongoose.model("ragister",loginSchema);
module.exports=ragister