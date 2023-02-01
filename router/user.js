const express = require("express");
const { create } = require("../controller/create");
const { deleteuser } = require("../controller/delete");

const router=new express.Router()

router.post('/create',create)
router.delete('/delete/:id',deleteuser)
module.exports=router