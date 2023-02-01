const User=require('../model/blogschema');
exports.create=async(req,res)=>{
    const user= new User(req.body)
    console.log("userrrsrsesr..",user)
    
    try {
        await user.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
        console.log("erroror",error)
    }
}