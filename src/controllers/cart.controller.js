const { Router } = require('express')
const router = Router()
const Cart = require('../models/cart.model')

router.get( '',async ( req, res )=>{
    try {
        const email = req.query.email
        const products = Cart.find({email}).lean().exec()
        return res
        .render("ejs/newcart.ejs")//, {products})
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
        
        console.log(req.body)
        const product = await Cart.findOne({ email : req.body.email, product_id : req.body.product_id}).lean().exec()
        if(product)
        {
            product.quantity++
            const product = await Cart.findByIdAndUpdate(product._id,product).lean().exec()
            return res
            .send({ qyt : product.quantity})
        }
        const man = await Cart.create(req.body)
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