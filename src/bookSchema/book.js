const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    bookname:String,
    authorname:String,
    category:String,
    year: Number,
} , { timestamps: true });


module.exports.bookname = mongoose.model('user', userSchema)