const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db = `mongodb+srv://teamlevis:tavaplwnsmay@cluster0.9xxdh.mongodb.net/Levis?retryWrites=true&w=majority`
// const db = 'mongodb+srv://walson:123@cluster0.jo5me.mongodb.net/test'

module.exports = () => mongoose.connect(db)