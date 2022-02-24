const { Router } = require('express')
const router = Router()

const Man = require('../models/man.model')


router.post( '',async ( req, res )=>{
    try {
        const man = await Man.create(req.body)
        return res
        .send(man)
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "Error from /men route",
            message : error.message
        })
    }
})

router.get( '/:subCat/:id',async ( req, res )=>{
    try {
        const man = await Man.findById(req.params.id).lean().exec()
        let men = man[0]
        return res
        .render("ejs/product.ejs", {man })
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "Error from /men route",
            message : error.message
        })
    }
})

router.get( '',async ( req, res )=>{
    try {
        let filter = {}
        if(req.query.prefn1)
        {
            let prefn = []
            let prefv = []
            for(let x in req.query)
            {
                if(x.startsWith('prefn'))
                {
                    prefn.push(req.query[x])
                }
                if(x.startsWith('prefv'))
                    prefv.push(req.query[x])
            }
            prefv.map((el,index) => {
                let y = el.split('|')
                let o1 = { }
                o1.$in = y
                let x = prefn[index]
                filter[prefn[index]] = o1
            })
        }
        console.log(filter)
        const men = await Man.find(filter).lean().exec()
        const pfvalues = {
            gender1 : "men",
            gender2 : "unisex",
            item_type1 : "jackets" ,
            item_type2 : "jeans",
            item_type3 : "T -Shirts and POLOS"
        }
        return res.render('ejs/menProducts.ejs', { men , pfvalues })
    } catch (error) {
        return res
        .status(500)
        .send({
            status : "Error from /men route",
            message : error.message
        })
    }
})

module.exports = router


