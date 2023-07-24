const router = require("express").Router()
const Cart = require("../modal/carts")
const { route } = require("./usersrouter")

router.post("/addtocart",async(req,resp)=>{
    try {
        const cart = new Cart(req.body)
        const data = await cart.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)        
    }

})

module.exports=router