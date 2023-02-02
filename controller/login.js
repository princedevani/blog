const bcrypt = require('bcrypt');
const Ragister=require('../model/loginschema');

exports.loginform =async(req,res)=>{
    try {
        const {email,password}=req.body;
    
        if(!(email && password)){
            console.log("all input required")
            throw new Error("all input required")
        }
        const user =await Ragister.findOne({email})
        if(user && (await bcrypt.compare(password,user.password))){
            
            res.status(201).send(user);  
        }else{
            throw new Error("Invalid email and password")
        }
    } catch (error) {
        console.log("err...",error)
        res.status(201).send({error: error.message})
    }
    }