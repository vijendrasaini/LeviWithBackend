const { Router } = require('express')
const router = Router()

router.get('', async ( req, res)=>{
    try {
        return res
        .render("ejs/paymentMethods.ejs")
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "get method error in paymentMethods.controller",
            message : error.message
        })
    }
})

module.exports = router