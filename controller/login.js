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
            const token = await user.generateAuthToken()
            console.log("successfully login",user,token)
            res.status(200).send({user,token});
        }else{
            throw new Error("Invalid email and password")
        }
    } catch (error) {
        console.log("err...",error)
        res.status(400).send({error: error.message})
    }
    }