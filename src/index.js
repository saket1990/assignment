const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
//const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://rhutvik-patel:jiCI0diV4CDbN9Pr@cluster0.afbog.mongodb.net/saketDB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );



const middleware= function(req, res, next){
        let currentDate=new Date()
        let a=currentDate.getDate()
        let b=currentDate.getMonth()+1
        let c=currentDate.getFullYear()
        let e=currentDate.getHours()
        let f=currentDate.getMinutes()
        let g=currentDate.getSeconds()
        let ip=req.ip
        let url=req.url
        console.log(a,"-",b,"-",c,e,":",f,":",g,ip,url)
        next()
    }
app.use(middleware);
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
