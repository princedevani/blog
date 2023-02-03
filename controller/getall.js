const User=require('../model/blogschema');
exports.getuserAll = async (req,res)=>{ 
    try {
        const user= await User.find({})
        // console.log('successsss.',user)
        res.status(200).send(user)
    } catch (error) {
        console.log("errrororrrr....",error)
        res.status(400).send(error)
    }
}
