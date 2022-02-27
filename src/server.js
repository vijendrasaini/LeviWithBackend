const express = require('express');
const mongodbConnect = require('./configs/db');
const path = require('path')


const homeController = require('./controllers/home.controller')
const registerAndLoginController = require('./controllers/registerandlogin.controller')
const paymentController = require('./controllers/payment.controller')
const thanksController = require('./controllers/thanks.controller')
const storelocatorController = require('./controllers/storelocator.controller')
const helpController = require('./controllers/help.controller')
const googleoauthController = require('./controllers/googleoauth.controller')
const { register, login } = require('./controllers/authentication.controller')
const manController = require("./controllers/man.controller")
const womanController = require("./controllers/woman.controller")
const cartController = require('./controllers/cart.controller')
const profileController = require('./controllers/profile.controller')
const paymentMethodsController = require("./controllers/paymentMethods.controller")
const cardDetailsController = require("./controllers/cardDetails.controller")
const netBankingController = require("./controllers/netBanking.controller")
const upiController = require("./controllers/upi.controller")
const walletController = require("./controllers/wallet.controller")
const gpayController = require("./controllers/gpay.controller")
const shippingController = require("./controllers/shipping.controller")
const searchController = require('./controllers/search.controller')


const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))
app.set('view engine','ejs')   

app.use('/home', homeController)
app.use('/login', registerAndLoginController)
app.use('/payment', paymentController)
app.use('/thanks',thanksController)
app.use('/storelocator', storelocatorController)
app.use('/help', helpController)
app.post('/signup',register)
app.post('/signin',login)
app.use('/oauth', googleoauthController)
app.use('/men', manController)
app.use('/women', womanController)
app.use('/cart',cartController)
app.use('/profile', profileController)
app.use("/paymentMethods", paymentMethodsController)
app.use("/cardDetails", cardDetailsController)
app.use("/netBanking", netBankingController)
app.use("/upi", upiController)
app.use("/wallet", walletController)
app.use("/gpay", gpayController)
app.use('/shipping',shippingController)
app.use('/search',searchController)



module.exports = ()=>{
    app.listen( 7000, async () => {
        try {
            await mongodbConnect()
            console.log("Server is running on the port 7000")
        } catch (error) {
            console.log({
                status : "connection failed",
                error_message : error.message
            })
        }
    })
}

