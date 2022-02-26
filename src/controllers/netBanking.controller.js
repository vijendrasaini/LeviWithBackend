const { Router } = require('express')
const router = Router()

router.get('', async ( req, res)=>{
    try {
        return res
        .render("ejs/netBanking.ejs")
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "get method error in netBanking.controller",
            message : error.message
        })
    }
})

module.exports = router