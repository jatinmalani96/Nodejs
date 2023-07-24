const router = require("express").Router()
const user = require("../model/user")
const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
const fs = require("fs")
const multer = require("multer");

const storageEngine = multer.diskStorage({
  destination: "./public/img",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});
const upload = multer({
  storage: storageEngine,
});

router.get("/",(req,resp)=>{
    resp.render("login")
})

router.get("/reg",(req,resp)=>{
    resp.render("reg")
})

router.post("/do_reg",upload.single("img"),async(req,resp)=>{
    try {
        const user = new User({name:req.body.name,email:req.body.email,pass:req.body.pass,img:req.file.filename})
        user.pass = await bcrypt.hash(user.pass,10)
        await user.save()
        // console.log(user);
        resp.render("reg",{msg:"ragister successfull..."})
    } catch (error) {
        console.log(error);
    }
})

router.post("/do_login",async(req,resp)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        const pass = await bcrypt.compare(req.body.pass,user.pass)
        if (pass) {
            const token = await jwt.sign({_id:user._id},process.env.KEY)
            user.Tokens =  user.Tokens.concat({token:token})
            await user.save()
            resp.cookie("jwt",token)
            resp.redirect("views")
        } else {
            resp.render("login",{err:"invalid user....."})
        }
    } catch (error) {
        resp.render("login",{err:"invalid user....."})
    }
})

router.get("/views",auth,async(req,resp)=>{
    try {
        const user = await User.find()
        // console.log(user);
        resp.render("view",{user:user})
    } catch (error) {
        console.log(error);
    }
})

router.get("/deleteuser",async(req,resp)=>{
    try {
        const id = req.query.uid
        // console.log(id);
        const udata = await User.findByIdAndDelete(id)
        fs.unlinkSync("public/img/"+udata.img)
        resp.redirect("views")
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
        const id = req.body.id
        const pass = await bcrypt.hash(req.body.pass,10)
        // console.log(pass);
        await User.findByIdAndUpdate(id,{name:req.body.name,email:req.body.email,pass:pass})
        resp.redirect("views")
    } catch (error) {
        console.log(error);
    }
})

router.get("/logout",auth,async(req,resp)=>{
    try {
        const user = req.user
        const token = req.token
        // console.log(user+" "+token);
        user.Tokens = user.Tokens.filter(result=>{
            return result.token!=token
        })
        user.save()
        resp.clearCookie("jwt")
        resp.render("login")
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
        resp.clearCookie("jwt")
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})



module.exports=router