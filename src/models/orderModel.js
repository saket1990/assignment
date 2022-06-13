const mongoose = require('mongoose');
const user= mongoose.Schema.Types.userId
const product=mongoose.Schema.Types.productId


const orderModelSchema = mongoose.Schema( {
	userId: {
                type:String,
                ref:user},
	productId: {
                type:String,
                ref:product},
	amount: Number,
	isFreeAppUser:{ 
                type: String,
                require: true,
        },
}, { timestamps: true });


module.exports = mongoose.model('OrderModel', orderModelSchema)