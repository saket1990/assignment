const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
  try{
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.status(404).send({ msg: "This is coming from controller (handler)"})

  } catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
}
}



















const createUser= async function (req, res) {
try{  
    let data= req.body
    let savedData= await UserModel.create(data)
    res.status(200).send({msg: savedData})
} catch (err) {
  console.log("This is the error :", err.message)
  res.status(200).send({ msg: "Error", error: err.message })
}
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode