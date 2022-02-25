const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema(
    {
        email : { type : String, required : true },
        
        product_id : { type : String, required : true },
        title : { type : String, required : true },
        color : { type : String, required : true, default : "Green" },
        size : { type : Number, required : true, default : 1 },
        qty : { type : Number, required : true, default : 1 },
        price : { type : Number, required : true }
    }, 
    {
        versionKey: false
    }
)


module.exports = mongoose.model('cart', cartSchema)