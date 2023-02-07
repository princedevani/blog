const multer= require('multer')
const User=require('../../model/blogschema')
// const app=require("../public/images")
 
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    // `images/Ss1.jpg`
    callback(null, './static/public/images');

  },
  filename: function (req, file, callback) {
    console.log(file)
    // callback(null, file.fieldname + '-' + '.jpg');
    callback(null, file.originalname);
  }
});
var uploadmulter = multer({ storage : storage}).single('img');
 
exports.upload=function(req,res){
  // uploadmulter(req,res,function(err) {
    uploadmulter(req,res,function(err) {
  try {
    res.send({imgsrc:`/public/images`+ file.originalname});
    console.log("secc uploading file")
      } catch (error) {
        console.log("error uploading file")
        // return res.end("Error uploading file.",err);
        return res.end("Error uploading file.");
      }  
})
}