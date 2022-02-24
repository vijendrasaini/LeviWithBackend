const { Router } = require('express')
const router = Router()
const crudController = require("./crud.controller")

router.get('', async ( req, res)=>{
    try {
        return res
        .render("ejs/levihelp.ejs")
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "get method error in helpController",
            message : error.message
        })
    }
})

module.exports = router