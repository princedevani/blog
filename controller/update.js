const User=require('../model/blogschema');

exports.updateuser= async (req, res) => {
    // const user = await User.findOneAndUpdate({_id:req.params.id},{title:req.body.title,date:req.body.date,authername:req.body.authername,imgsrc:req.body.imgsrc})
    // const user = await User.findByIdAndUpdate({_id:req.params.id})
    // console.log("find and update",req.params.id,req.body.date)
   try {
    const user = await User.findOneAndUpdate({_id:req.params.id},{title:req.body.title,date:req.body.date,authername:req.body.authername,imgsrc:req.body.imgsrc})
    updatedata = await User.findOneAndUpdate(res.user)
       if(!user) {
           return res.status(400).send("user not found")
        }
    await user.save()
        res.status(200).send(updatedata)
        console.log("susccessfully...",user)
        console.log("susccessfully update...",updatedata)
   } catch (error) {
    console.log("erororor",error)
       res.status(400).send(error.message)
   }
}


// exports.updateuser= async (req, res) => {
//     const updates = Object.keys(req.body)
//    try {
//        const  user = await User.findById(req.params.id)
//        if(!user) {
//            return res.status(400).send("user not found")
//         }
//         updates.forEach((update) => user[update] = req.body[update])
//         await user.save()
//         console.log("susccessfully...")
//        res.status(200).send(user)
//    } catch (error) {
//     console.log("erororor",error)
//        res.status(400).send(error.message)
//    }
// }