const express=require("express")
const router=express.Router()


const Men=require("../models/man.model")
const Women=require("../models/woman.modal")


router.get("/:search",async(req,res)=>{

try{
 console.log(req.params.search)
 var regex=new RegExp(req.params.search,'i')
    let searchResults=await Men.find({ title:regex}).lean().exec()
    // select({ "title": 1, "_id": 0}).
res.send(searchResults)

}
catch(err)
{
res.send(err.message)

}



})







router.get("/search/:women",async(req,res)=>{

    try{
     console.log(req.params.women)
     var regex=new RegExp(req.params.women,'i')
        let searchResults=await Women.find({ title:regex}).lean().exec()
        // select({ "title": 1, "_id": 0}).
    res.send(searchResults)
    
    }
    catch(err)
    {
    res.send(err.message)
    
    }
    
    
    
    })
    



module.exports=router