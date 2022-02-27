const mongoose = require("mongoose")
const womanSchema = new mongoose.Schema(
    {
        title : { type : String, required : true },
        item_no : { type : String, required : true },
        gender : { type : String, required : true },
        category : { type : String, required : true },
        item_type : { type : String, required : true },
        color : [{ type : mongoose.Schema.Types.Mixed}],
        price : { type : mongoose.Schema.Types.Mixed, required : true },
        size : { type : mongoose.Schema.Types.Mixed, required : true },
        highresImage : [{ type : String}],
        image : [{ type : String}],
        description : { type : String, required : true },
        fit : [{type : String}],
        material : [{ type : String}]
    }, 
    {
        versionKey: false
    }
)

module.exports = mongoose.model('woman', womanSchema)


