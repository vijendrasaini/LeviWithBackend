const express = require('express');
const mongodbConnect = require('./configs/db');
const path = require('path')


const homeController = require('./controllers/home.controller')
const registerAndLoginController = require('./controllers/registerandlogin.controller')
const paymentController = require('./controllers/payment.controller')
const thanksController = require('./controllers/thanks.controller')
const storelocatorController = require('./controllers/storelocator.controller')
const helpController = require('./controllers/help.controller')

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))
app.set('view engine','ejs')   

app.use('/home', homeController)
app.use('/account', registerAndLoginController)
app.use('/payment', paymentController)
app.use('/thanks',thanksController)
app.use('/storelocator', storelocatorController)
app.use('/help', helpController)

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