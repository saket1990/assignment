const { count } = require("console")
const userModel = require("../models/userModel")


const createUserModel=async function(req, res){
    let data=req.body
    let savedata=await userModel.find({userId},{productId})
    res.send({msg:savedata})
        
}



module.exports.createUserModel= createUserModel
