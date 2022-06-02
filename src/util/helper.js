const printdate=function(){
    let currentdate=newDate()
    console.log(currentdate)}
const printmonth=function(){
    let currentmonth=newMonth()
    console.log(currentmonth)}
const info=function(){
let batchname="Radon"
let week="W3"
let day="D1"
const info=batchname + week + day
console.log(info + 'the topic for today is Nodejs module system' )}

module.exports.date=printdate
module.exports.month=printmonth
module.exports.info=info