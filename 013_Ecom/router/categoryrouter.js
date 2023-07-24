const router = require("express").Router()
const category = require("../modal/category")

router.post("/",async(req,resp)=>{
    try {
        const cat = new category(req.body)
        const data = await cat.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/",async(req,resp)=>{
    try {
        const data = await category.find()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id",async(req,resp)=>{
    try {
        const _id = req.params.id
        const data = await category.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id",async(req,resp)=>{
    try {
        const _id = req.params.id
        const data = await category.findByIdAndDelete(_id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

module.exports=router