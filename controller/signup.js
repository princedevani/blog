const validator=require("validator");
const bcrypt = require('bcrypt');

const Ragister=require('../model/loginschema');

exports.registrationform =async(req,res)=>{
    try {
        const {name,email,password} = req.body;

        if(!(name && email && password)){
            console.log("data required")
            throw new Error("all field required")
        }

        if (!name.trim()) {
            // console.log("firstname /.....",firstname)
            throw new Error("space is not required.fill up name.")
        }else if(!/^[a-zA-Z ]*$/.test(name)){
            throw new Error("name is not valid")
        }else if(!validator.isLength(name,{min:3 ,max:30})){
            throw new Error("validation min length 3 and max lendth 30")
        }
        
        if(!email.trim()){
            throw new Error("space is not required.fill up email.")
        }else if(!/^[a-z0-9]+(([._-]?[a-z0-9]+)+)?@[a-z]{2,5}.[[a-z]{2,5}]*$/.test(email)){
            throw new Error("email is a not valid.......")
        }

        const olduser= await Ragister.findOne({email});
        console.log("already use that",olduser)
        if(olduser){
            throw new Error("user already exist.");
        }
        encrytedPassword= await bcrypt.hash(password,8)

        const ragister=await Ragister.create({
            name,
            email:email.toLowerCase(),
            password:encrytedPassword,
        });
        const token = await ragister.generateAuthToken()

        console.log("successfully ragister",ragister)
        res.status(200).send({ragister,token});
        } catch (error) {
        console.log("error",error.message);
        res.status(400).send(error.message);  
}
}