const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const userModel= require("../bookSchema/book")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.get("/test/book", async function(req, res){
    let allbook=await userModel.find()
    res.send({msg: allbook})
})
router.post("/test/allbook",async function(req, res){
    let data=req.body
    let saveddata= await userModel.create(data)
    res.send({msg: saveddata})
})

module.exports = router;