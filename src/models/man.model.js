const mongoose = require("mongoose")
const menSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        item_no: { type: String, required: true },
        gender: { type: String, required: true },
        item_type: { type: String, required: true },
        category: { type: String, required: true },
        color: [{ type: String }],
        price: { type: mongoose.Schema.Types.Mixed, required: true },
        size: { type: mongoose.Schema.Types.Mixed, required: true },
        highresImage: [{ type: String }],
        image: [{ type: String }],
        description: { type: String, required: true },
        fit: [{ type: String }],
        material: [{ type: String }]
    },
    {
        versionKey: false
    }
)
module.exports = mongoose.model('men', menSchema)
// let x = new Schema
// "title": "LEVI'S® TRUCKER JACKET",
//         "item_no": "289430022",
//         "gender": "men",
//         "item_type": "jackets",
//         "color": [
//             "Dark Indigo"
//         ],
//         "price": {
//             "mrp": 11000.00,
//             "price": 11000.00
//         },
//         "size": {
//             "S": 1,
//             "M": 1,
//             "L": 1,
//             "XL": 0,
//             "XXL": 0
//         },
//         "image": [
//             "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwf619575e/images/hi-res/289430022/289430022_01_Front.jpg?sw=334&sh=445",
//             "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dwe4ac576d/images/hi-res/289430022/289430022_02_Back.jpg?sw=334&sh=445",
//             "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw1c4eab49/images/hi-res/289430022/289430022_03_Side.jpg?sw=334&sh=445"
//         ],
//         "description":  "Perfect for your on-the-go life, this shirt makes outfitting easier then ever. We cut this button-up to flatter your shape in the most subtle way, while still providing an easy fit and drape.",
//         "fit": [
//             "Long Sleeve",
//             "Regular Fit",
//             "Shirt Collar",
//             "Square patch pocket"
//         ],
//         "material": [
//             "98% Cotton, 2% Elastane"
//         ]