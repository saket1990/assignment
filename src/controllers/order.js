const { count } = require("console")
const orderModel= require("../models/orderModel")


const createorderModel=async function(req, res){
    let data = req.body
    let savedata=await orderModel.create(data)
    res.send({msg:savedata})
}


module.exports.createorderModel= createorderModel