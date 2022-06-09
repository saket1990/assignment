const express = require('express');
const router = express.Router();
//const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBooks", BookController.createBooks )

router.post("/createAuthors", BookController.createAuthors)

router.get("/getbookbychetan", BookController.bookbyChetanBhagat)

router.get("/getauthorname", BookController.authorname)

router.get("/getbookcostbetween", BookController.bookscostbetween)

module.exports = router;
