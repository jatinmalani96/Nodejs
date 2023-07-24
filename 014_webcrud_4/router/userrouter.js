const router = require("express").Router()
const User = require("../modal/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")

router.get("/",(req,resp)=>{
    resp.render("login")
})

router.get("/reg",(req,resp)=>{
    resp.render("reg")
})

router.post("/do_reg",async(req,resp)=>{
    try {
        const user = new User(req.body)
        user.pass = await bcrypt.hash(user.pass,10)
        // console.log(user);
        await user.save()
        resp.render("reg",{msg:"Registation successfull......"})
        
    } catch (error) {
        console.log(error);
    }
})

router.post("/do_login",async(req,resp)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        const isvalid = await bcrypt.compare(req.body.pass,user.pass)
        // console.log(isvalid);
        if (isvalid) {
            const token = await jwt.sign({_id:user._id},process.env.KEY)
            user.Tokens = user.Tokens.concat({token:token})
            user.save()
            resp.cookie("ujwt",token)
            resp.redirect("viewuser")
        } else {
            resp.render("login",{err:"invalid password...."})
        }
        
    } catch (error) {
        resp.render("login",{err:"invalid password...."})
    }
})

router.get("/viewuser",auth,async(req,resp)=>{
    try {
        const user = await User.find()
        resp.render("view",{user:user})
    } catch (error) {
        console.log(error);
    }
})

router.get("/deleteuser",async(req,resp)=>{
    try {
        const id = req.query.uid
        await User.findByIdAndDelete(id)
        resp.redirect("viewuser")
    } catch (error) {
        console.log(error);
    }
})

router.get("/edituser",async(req,resp)=>{
    try {
        const id = req.query.uid
        const user = await User.findOne({_id:id})
        // console.log(user);
        resp.render("update",{user:user})
    } catch (error) {
        console.log(error);
    }
})

router.post("/do_update",async(req,resp)=>{
    try {
        const upass = await bcrypt.hash(req.body.pass,10)
        // console.log(upass);
        const id = req.body.id
        await User.findByIdAndUpdate(id,{uname:req.body.uname,email:req.body.email,pass:upass})
        resp.redirect("viewuser")
    } catch (error) {
        console.log(error);
    }
})

router.get("/logout",auth,async(req,resp)=>{
    try {
        const user = req.user
        const token = req.token
    // console.log(user+" "+token);

    user.Tokens = user.Tokens.filter(ele=>{
        return ele.token!=token
    })
    user.save()
        resp.clearCookie("ujwt")
        resp.render("login",{mmm:"logout successfully....."})
    } catch (error) {
        console.log(error);
    }
})

router.get("/logoutall",auth,async(req,resp)=>{
    try {
        const user = req.user
        const token = req.token
    // console.log(user+" "+token);

    user.Tokens = []
    user.save()
        resp.clearCookie("ujwt")
        resp.render("login",{mmm:"logout successfully....."})
    } catch (error) {
        console.log(error);
    }
})




module.exports=router