const User=require('../model/blogschema');

exports.deleteuser = async (req,res)=>{
    try {
            const user=await User.findByIdAndDelete(req.params.id)
            if(!user){
                return res.status(400).send()
            }
            res.status(200).send(user)
        } catch (error) {
            res.status(400).send(error)
        }
    }
    