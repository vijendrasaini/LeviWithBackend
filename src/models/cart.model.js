const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    image: [{ type: String }],
    title: { type: String, required: true },
    color: [{ type: mongoose.Schema.Types.ObjectId, ref: "men" }],
    size: { type: mongoose.Schema.Types.ObjectId, ref: "men", required: true },
    unitPrice: { type: mongoose.Schema.Types.ObjectId, ref: "men", required: true },
    totalPrice: { type: mongoose.Schema.Types.ObjectId, ref: "men", required: true },
}, {
    versionKey: false,
    timestamps: true
})
module.exports = mongoose.model("cart", cartSchema);