const express = require('express');
const router = express.Router();

const newbookcontroller= require("../controllers/newbookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createnewAuthor", newbookcontroller.createnewAuthor  )

router.post("/createpublisher", newbookcontroller.createpublisher)

router.post("/createnewBook", newbookcontroller.createnewBook  )

router.get("/getbookwithauthorandpublisher", newbookcontroller.getbookwithauthorandpublisher)

module.exports = router;