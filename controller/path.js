const User=require('../model/blogschema');
exports.path =async(req,res)=>{
    try {
        const {path}=req.body;
        if(!(path)){
            console.log("path is required")
            throw new Error("path is required")
        }else if(!/^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$/.test(path)){
                throw new Error("only use for character(a-zA-z0-9) and desh(-) in path value");
        }
        const user =await User.findOne({path})
        // await user.save()
        if (user==null) {
            throw new Error("enter a valid path")
        } else {
            console.log("get a success path ",user)
            res.status(200).send(user);
        }
    } catch (error) {
        console.log("err...",error)
        // res.status(400).send("error",{error.message})
        res.status(400).send({error:error.message})
    }
}



