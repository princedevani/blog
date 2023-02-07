const multer = require("multer");
const User = require("../model/blogschema");
const sharp = require("sharp");
const { v4: uuidV4 } = require("uuid");
const path = require("path");
const uploadDir = path.join(__dirname, "../public/images");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, `${uuidV4()}-${file.originalname}`);
  },
});
exports.multerUpload = multer({ storage: storage }).single("images");

exports.uploads = (req, res) => {
  try {
    console.log(req.file,uploadDir);
    const imgsrc = `/images/${req.file.filename}`;
    res.status(200).json({ imgsrc });
  } catch (error) {
    return res.send("Error uploading file.");
  }
};
