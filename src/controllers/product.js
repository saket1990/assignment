const { count } = require("console")
const productModel= require("../models/productModel")

const createProductModel=async function(req, res){
    let data=req.body
    let savedata=await productModel.create(data)
    res.send({msg:savedata})

}

module.exports.createProductModel= createProductModel