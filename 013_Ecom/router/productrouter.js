const router = require("express").Router()
const product = require("../modal/product")
const category = require("../modal/category")

router.post("/",async(req,resp)=>{
    try {
        const pro = new product(req.body)
        const data = await pro.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

router.get("/",async(req,resp)=>{
    try {
        const data = await product.find()
        resp.send(data)
                
    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id",async(req,resp)=>{
    try {
        const _id = req.params.id
        const data = await product.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

router.delete("/:id",async(req,resp)=>{
    try {
        const _id = req.params.id
        const data = await product.findByIdAndDelete(_id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

module.exports=router