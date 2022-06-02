const a= function trim(){
  let text=  "    function up    "
  let result=text.trim()
  console.log(a)
}
const b= function changetoLower(){
    let text2="Function up"
    let result=text2.changetoLower()
    console.log(b)
}
const c= function changetoUpper(){
    let text3="function up"
    let result=text3.changetoUpper()
    console.log(c)
}


module.exports.a=a
module.exports.b=b
module.exports.c=c