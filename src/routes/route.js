const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController.js")

router.post("/createBook", UserController.createBook)

router.get("/BookList", UserController.bookList)

router.get("/getBooksInYear", UserController.getBooksInYear)

router.get("/getParticularBooks", UserController.getParticularBooks)

router.get("/getXINRBooks", UserController.getXINRBooks)

router.get("/getRandomBooks", UserController.getRandomBooks)

module.exports = router;