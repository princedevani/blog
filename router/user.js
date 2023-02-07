const express = require("express");
const { route } = require("../app");
const { create } = require("../controller/create");
const { deleteuser } = require("../controller/delete");
const { getuserAll } = require("../controller/getall");
const { uploads, multerUpload } = require("../controller/imgupload");
const { loginform } = require("../controller/login");
const { registrationform } = require("../controller/signup");
const { updateuser } = require("../controller/update");



const router=new express.Router()
router.post('/create',create)
router.delete('/delete/:id',deleteuser)
router.get("/getall",getuserAll)
router.patch("/update/:id",updateuser)
router.post('/ragister',registrationform)
router.post('/login',loginform)
router.post('/upload',multerUpload,uploads)

  

module.exports=router

