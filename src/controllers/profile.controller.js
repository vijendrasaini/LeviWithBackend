const { Router } = require('express')
const User = require('../models/user.model')
const router = Router()

router.get('/:id', async ( req, res)=>{
    try {
        const user = await User.findById(req.params.id).lean().exec()
        console.log(user)
        const { email } = user
        return res
        .render('ejs/myaccount.ejs',{ email })
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "get method error in profileController",
            message : error.message
        })
    }
})

module.exports = router