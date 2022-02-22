const express = require('express');
const mongodbConnect = require('./configs/db');
const path = require('path')


const homeController = require('./controllers/home.controller')
const registerAndLoginController = require('./controllers/registerandlogin.controller')



const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))
app.set('view engine','ejs')   

app.use('/home', homeController)
app.use('/login', registerAndLoginController)



module.exports = ()=>{
    app.listen( 7000, async () => {
        try {
            // await mongodbConnect()
            console.log("Server is running on the port 7000")
        } catch (error) {
            console.log({
                status : "connection failed",
                error_message : error.message
            })
        }
    })
}