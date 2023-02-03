const User=require('../model/blogschema');
var validator = require('validator');
exports.create=async(req,res)=>{
    const user= new User(req.body)
    try {
        const { title,date,authername,imgsrc } = req.body;
       
        if (!(title && authername && imgsrc)) {
            throw new Error("All input is required");
     
         }
        if (!title.trim()) {
            throw new Error("title  is required")
         }  

         if (!authername.trim()) {
            throw new Error("authername  is required")
         } else if (!/^[a-zA-Z ]*$/.test(authername)) {
            throw new Error("authername  is not valid")
         } else if (!validator.isLength(authername, { min: 1, max: 100 })) {
            throw new Error("authername  should contain 3 to  characters.")
         }

         if (!imgsrc.trim()) {
            throw new Error("image is required")
         }

        await user.save()
        console.log("successfully",user)
        res.status(200).send(user)
    } catch (error) {
        
        res.status(400).send(error.message)
        // console.log("erroror",error)
    }
}