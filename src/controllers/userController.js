const UserModel= require("../models/userModel.js")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let bookList=await UserModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: bookList})
}

const getBooksInYear=async function (req, res){
    let yearList=await UserModel.find({year:req.body.year}).select({bookName:1,_id:0})
    res.send({msg:yearList})
}

const getParticularBooks=async function(req, res){
    let specificBook=await UserModel.find(req.body)
    res.send({msg:specificBook})
}

const getXINRBooks=async function(req, res){
    let listofbooks=await UserModel.find({"price.indianPrice":["100INR","200INR","500INR"]})
    res.send({msg:listofbooks})
}

const getRandomBooks=async function(req, res){
    let randombook=await UserModel.find({$or:[{stockAvailable:true},{totalPages:500}]})
    res.send({msg:randombook})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks