const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  path:{
    type: String,
    default: null,
    unique: true,
    lowercase: true
  },
  title: { 
    type: String, 
    default: null 
  },
  date: { 
    type: Date, 
    default: null 
  },
  authername: {
     type: String,
     default: null 
  },
  imgsrc: {
     type: String,
     default: null,
  },
  description:{
     type: String,
     default: null,
  }
});

const User=mongoose.model("User",userSchema)
module.exports=User
