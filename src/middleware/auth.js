

const mid1= function(req,res,next){
    let middleware=req.headers
    let apptype=middleware["x-auth-token"]
    if(!apptype){
        apptype=headers["x-auth-token"]
    }
    if(!apptype){
        return res.send({status:false,message:"a mandatory header is missing"})
    }
    if(apptype=="true"){
        req.apptype["x-auth-token"]=true
    }else{
        return res.send({sattus:true,message:"valid token required"})
    }
    let decodedToken= jwt.verify(token,"functionup-radon");
    if(!decodedToken){
        return res.send({status:false,message:"token is invalid"})
    }
    next()
}
module.exports.mid1=mid1