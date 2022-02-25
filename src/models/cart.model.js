const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema(
    {
        user_id : { type : String, required : true },
        
        image : { type : String, required : true },
        product_id : { type : String, required : true },
        title : { type : String, required : true },
        color : { type : String, required : true, default : "Green" },
        size : { type : String, required : true, default : 1 },
        qty : { type : String, required : true, default : 1 },
        price : { type : String, required : true }
    }, 
    {
        versionKey: false
    }
)


module.exports = mongoose.model('cart', cartSchema)