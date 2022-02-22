const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },

}, {
    timestamps: true,
    versionKey: false
})