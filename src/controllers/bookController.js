const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authormodel")

const createBooks= async function(req, res){
    let data=req.body
    let savedata=await BookModel.create(data)
    res.send({msg:savedata})
}

const createauthors= async function(req, res){
    let data=req.body
    let savedata=await AuthorModel.create(data)
    res.send({msg:savedata})
}

const bookbyChetanBhagat= async function(req,res){
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData=await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}

const authorname= async function(req,res){
    let data=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
    let authordata=await AuthorModel.find({author_id:data.author_id}).select("author_name")
    let price=data.prices
    res.send({msg:authordata,price})
}

const bookscostbetween= async function(req, res){
    let data=await BookModel.find({price:{$gte:50,$lte:100}}).select("author_id")
    let name=await AuthorModel.find({authorname:data.author_name}).select("author_name")
    res.send({msg:name})
}

module.exports.createBooks= createBooks
module.exports.createauthors= createauthors
module.exports.bookbyChetanBhagat= bookbyChetanBhagat
module.exports.authorname= authorname
module.exports.bookscostbetween= bookscostbetween