

const User= require('../model/blogschema');
const multer  = require('multer')
const app = require("../app")

// const upload = multer({
//     dec: '/pubilc/images'
// })

// exports.uploadimg = upload.single('images'),async(req, res) => {
    
//        console.log(req.file)
//        res.send(data)
// }
const upload = multer({ 
    storage: multer.diskStorage({
        destination : function (req, file, cb) {
            cb(null, "../public/images")
        },
        filename : function (req, file, cb) {
            cb(null, file.fieldname  + ".jpg") 
        }
    })
}).array('upload img');
// const storage = multer.diskStorage({
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
// })
// const upload = multer({ storage: storage })


exports.upload = upload,async(req, res) => {
    try {
        const images =await req.image;
        return JSON.stringify({"status": 200, "error": null, "response": results});   
        
    } catch (error) {
        console.log("errrorrr..",error.message)
        res.send(apiResponse({message: 'File uploaded successfully.', images}));
    }
        
}

// exports.uploadimg = upload.single('images'), async(req, res) => {
//     // console.log("imgg......",upload)
//     // const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250 }).png().toBuffer() 
//     // console.log("imgg......buffer",buffer)
//     // req.user.images = buffer
//     //  req.user.avatar = req.file.buffer
//     await req.user.save()
    
//     res.send() 
//     //console.log('responce.....',req.user)
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
    
// }

