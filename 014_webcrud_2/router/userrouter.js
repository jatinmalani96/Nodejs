const Router = require("express").Router()

Router.get("/",(req,resp)=>{
    resp.render("reg")
})

module.exports=Router