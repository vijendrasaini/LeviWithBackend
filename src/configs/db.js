const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db = `mongodb+srv://teamlevis:${process.env.MONGOATLAS_SECURITY_KEY}@cluster0.9xxdh.mongodb.net/Levis?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(db)