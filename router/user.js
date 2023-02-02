const express = require("express");
const { create } = require("../controller/create");
const { deleteuser } = require("../controller/delete");
const { getuserAll } = require("../controller/getall");
const { updateuser } = require("../controller/update");

const router=new express.Router()

router.post('/create',create)
router.delete('/delete/:id',deleteuser)
router.get("/getall",getuserAll)
router.patch("/update/:id",updateuser)
module.exports=router