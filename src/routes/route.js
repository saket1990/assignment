const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook )

router.get("/getbookList", BookController.bookList)

router.get("/getBooksInYear", BookController.getBooksInYear)

router.get("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;