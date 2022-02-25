const { Router } = require('express')
const router = Router()
const Cart = require('../models/cart.model')

router.get( '/:id',async ( req, res )=>{
    try {
        const products = await Cart.find({user_id : req.params.id}).lean().exec()
        return res
        .render("ejs/newcart.ejs", {products})
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "Error from /cart route",
            message : error.message
        })
    }
})
router.post( '',async ( req, res )=>{
    try {
        let product = await Cart.findOne({ email : req.body.email, product_id : req.body.product_id}).lean().exec()
        if(product)
        {
            product.quantity++
            product = await Cart.findByIdAndUpdate(product._id,product).lean().exec()
            return res
            .send({ qyt : product.quantity})
        }
        product = await Cart.create(req.body)
        return res
        .send({ qyt : product.quantity})
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "Error from /cart route",
            message : error.message
        })
    }
})

module.exports = router