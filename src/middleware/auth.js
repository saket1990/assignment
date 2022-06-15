const jwt=require("jsonwebtoken")

const authenticate= function(req,res,next){
    let middleware=req.headers
    let token=middleware["x-Auth-Token"]
    if(!token){
        token=req.headers["x-auth-token"]
    }
    if(!token){
        return res.send({status:false,message:"a mandatory header is missing"})
    }
    
    let decodedToken= jwt.verify(token,"functionup-radon");
    if(!decodedToken){
        return res.send({status:false,message:"token is invalid"})
    }
    next()
}
const authorise= function(req,res,next){
    let token=req.headers["x-auth-token"]
    let decodedToken= jwt.verify(token,"functionup-radon")
    if(!decodedToken) return res.send({status:false, msg:"token is invalid"})

    let usermodified=req.params.userId
    let userLoggedIn=decodedToken.userId
    if(usermodified !=userLoggedIn) return res.send({status:false,msg:"user logged is not allowed to modify the requseted users data"})
    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise