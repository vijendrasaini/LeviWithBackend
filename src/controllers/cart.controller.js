const { Router } = require('express')
const router = Router()
const Cart = require('../models/cart.model')

router.get( '/:id',async ( req, res )=>{
    try {
        const deleted_product_id = req.query.id 
        if(req.query.id)
        {
            let deleted_product = await Cart.findByIdAndDelete(deleted_product_id).lean().exec()
        }
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
        let product = await Cart.findOne({ user_id : req.body.user_id, product_id : req.body.product_id}).lean().exec()
        
        if(product)
        {
            product.qty++
            product = await Cart.findByIdAndUpdate(product._id,product,{ new : true}).lean().exec()
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


router.get( '/:id',async ( req, res )=>{
    try {
        const products = await Cart.find({user_id : req.params.id}).lean().exec()
        console.log(products)
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

module.exports = router