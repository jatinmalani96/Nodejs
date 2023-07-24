const router = require("express").Router()
const User = require("../modal/users")


router.post("/",async(req,resp)=>{
    try {
        // console.log(req.body);
        const users = new User(req.body)
        const data = await users.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

router.get("/",async(req,resp)=>{
    try {
        
        const data = await User.find()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

router.put("/:id",async(req,resp)=>{
    try {
        const _id = req.params.id
        const data = await User.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

router.delete("/:id",async(req,resp)=>{
    try {
        const _id = req.params.id
        const data = await User.findByIdAndDelete(_id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

module.exports = router