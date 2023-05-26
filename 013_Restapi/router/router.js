const router = require("express").Router()
const login = require("../modal/login")


router.get("/",async(req,resp)=>{
    try {
        const view = await student.find()
        resp.send(view)
    } catch (error) {
        resp.send(error)
    }
})


router.post("/",async(req,resp)=>{
    try {
        const addData = new student(req.body)
        const add = await addData.save()
        resp.send(add)
    } catch (error) {
        resp.send(error)
    }
})


router.put("/:id",async(req,resp)=>{
    const _id = req.params.id
    try {
        const update = await student.findByIdAndUpdate(_id,req.body)
        resp.send(update)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id",async(req,resp)=>{
    const _id = req.params.id
    try {
        const del = await student.findByIdAndDelete(_id)
        resp.send(del)
    } catch (error) {
        resp.send(error)
    }
})


module.exports=router