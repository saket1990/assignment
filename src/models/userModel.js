const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema( {
    bookname:{type: String,require: true},
    authorname: String,
    categoryname: String,
    price:{
        indianPrice:String,
        europeanPrice:String
    },
    year: Number,
    tags: Array,
    totalPages:Number,
    stockAvailable:Boolean   
},{ timestamps: true })

module.exports = mongoose.model('Book', bookSchema)