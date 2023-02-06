const multer= require('multer')
const User=require('../../model/blogschema')
// const app=require("../public/images")
 
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    `images/Ss1.jpg`
    callback(null, '/public/images');

  },
  filename: function (req, file, callback) {
    console.log(file)
    callback(null, file.fieldname + '-' + '.jpg');
  }
});
var uploadmulter = multer({ storage : storage}).single('upload');
 
exports.upload=function(req,res){
  uploadmulter(req,res,function(err) {
  // try {
  //       console.log("secc uploading file")
  //       res.end({imgsrc:""});
  //     } catch (error) {
  //       console.log("error uploading file")
  //       // return res.end("Error uploading file.",err);
  //       return res.end("Error uploading file.");
  //     }  
      if(err) {
          console.log("error uploading file")
            // return res.end("Error uploading file.",err);
            return res.end("Error uploading file.");
        }
        console.log("secc uploading file")
        res.end({imgsrc:""});
        // res.status(200).seand("File is uploaded",uploadmulter)
    });
};


//==============================================================================
// exports.upload = async (req, res) => {
//     try {
//       const imgupload= await upload.any('upload');
//       console.log(req.file);
  
//     //   if (req.file == undefined) {
//     //     console.log("undisididi",req.file   );
//     //     return res.send({
//     //       message: "You must select a file.",
//     //     });
//     //   }
  
//       console.log("successfully uploaded",imgupload)
//       return res.send({
//         message: "File has been uploaded.",imgupload
//       });
//     } catch (error) {
//       console.log(error);
  
//       return res.send({
//         message: "Error when trying upload image: ${error}",
//       });
//     }
//   };
  
