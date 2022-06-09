const publisherModel=require("../models/newPublisher")
const newAuthor = require("../models/newAuthor")
const newBook = require("../models/newBook")
const { find } = require("../models/newBook")

const createnewAuthor= async function (req, res) {
    let newauthor = req.body
    let authorCreated = await newAuthor.create(newauthor)
    res.send({data: authorCreated})
}

const createpublisher= async function (req, res){
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}


const createnewBook= async function (req, res) {
    let newbook = req.body
    let authorid=newbook.authorid
    if(!authorid) res.send({msg:"author id required"})

    let validauthorid=await newAuthor.findById(authorid)
    if(!validauthorid) res.send({msg:"Invalid authorid"})

    let publisherid=newbook.publisherid
    if(!publisherid) res.send({msg:"publisher id is required"})

    let validpublisherid=await publisherModel.findById(publisherid)
    if(!validpublisherid) res.send({msg:"Invalid publisherid"})

    let data=await newBook.create(newbook)
    res.send({msg:data})
}

const getbookwithauthorandpublisher= async function (req, res){
    let data=await newBook.find().populate(["authorid","publisherid"])
    res.send({msg:data})
}

module.exports.createnewAuthor= createnewAuthor
module.exports.createpublisher= createpublisher
module.exports.createnewBook= createnewBook
module.exports.getbookwithauthorandpublisher= getbookwithauthorandpublisher
