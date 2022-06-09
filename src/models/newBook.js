const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    authorid: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    publisherid:{
        type: ObjectId,
        ref: "publisher"
    }

}, { timestamps: true });


module.exports = mongoose.model('newBook', newBookSchema)