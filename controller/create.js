const User=require('../model/blogschema');
var validator = require('validator');
exports.create=async(req,res)=>{
    const user= new User(req.body)
    // const user= new User({where: {
    //     title: req.body.title,
    //     date: req.body.date,
    //     authername: req.body.authername,
    //     imgsrc: req.body.imgsrc}
    //   })
    // const user = new User({
    //     title,
    //     date,
    //     authername,
    //     imgsrc
    //  });
    // console.log("userrrsrsesr..",user)
    

    try {
        const { title,date,authername,imgsrc } = req.body;
       
        if (!(title && date && authername && imgsrc)) {
            throw new Error("All input is required");
     
         }
        if (!title.trim()) {
            throw new Error("title  is required")
         } else if (!/^[a-zA-Z ]*$/.test(title)) {
            throw new Error("title  is not valid")
         } else if (!validator.isLength(title, { min: 1, max: 50 })) {
            throw new Error("title should contain 3 to  characters.")
         }

         if (!date.trim()) {
            throw new Error("date is required")
         } 

         if (!authername.trim()) {
            throw new Error("authername  is required")
         } else if (!/^[a-zA-Z ]*$/.test(authername)) {
            throw new Error("authername  is not valid")
         } else if (!validator.isLength(authername, { min: 1, max: 50 })) {
            throw new Error("authername  should contain 3 to  characters.")
         }

         if (!imgsrc.trim()) {
            throw new Error("image is required")
         }

         (typeof title != "undefined" ? title : "")
        await user.save()
        res.status(200).send(user)
    } catch (error) {
        
        res.status(400).send(error.message)
        // console.log("erroror",error)
    }
}