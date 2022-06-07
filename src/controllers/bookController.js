const BookModel= require("../models/bookModel")

const createBook= async function (req, res){
    let data=req.body
    let savedData= await bookmodel.create(data)
    res.send({msg:savedData})
}

const bookList= async function (req, res){
    let allBooks= await bookmodel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg:allBooks})
}

const getBooksInYear= async function (req, res){
    let publishingyear=req.boby.year
    let allBooks= await bookmodel.find({year:publishingyear})
    res.send({msg:allBooks})
}

const getParticularBooks= async function (req, res){
    let fetch=req.boby
    let allBooks= await bookmodel.find({$or:[{bookName:fetch.bookName},{tags:fetch.tags},{totalPages:fetch.totalPages}]})
    res.send({msg:allBooks})
}

const getXINRBooks= async function (req, res){
    let inrBooks= await bookmodel.find({$or:[{"price.indianPrice": {$eq:"100INR"}, "price.indianPrice": {$eq:"200INR"},"price.indianPrice": {$eq:"500INR"}}]})
    res.send({msg:inrBooks})
}

const getRandomBooks= async function (req, res){
    let allBooks= await bookmodel.find({$or:[{totalPages:{$gt :500}},{stockavailable:true}]})
    res.send(allBooks)
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks