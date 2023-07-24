const router = require("express").Router()
const User = require("../modal/user")
const bcrypt = require("bcryptjs")

router.get("/",(req,resp)=>{
    resp.render("login")
})
router.get("/reg",(req,resp)=>{
    resp.render("reg")
})

router.post("/do_ragiester",async(req,resp)=>{
    try {
        const user = new User({uname:req.body.uname,email:req.body.email,pass:req.body.pass,num:req.body.num})
        await user.save()
        resp.render("reg",{msg:"Ragistion successfull..."})
    } catch (error) {
        
    }
})

router.get("/viewuser",async(req,resp)=>{
    try {
        const data = await User.find()
        resp.render("view",{userdata:data})
    } catch (error) {
        resp.send(error)
    }
})

router.get("/deleteuser",async(req,resp)=>{
    try {
        const id = req.query.uid
        await User.findByIdAndDelete(id)
        resp.redirect("viewuser")
    } catch (error) {
        resp.send(error)
    }

})

router.get("/updateuser",async(req,resp)=>{
    try {
        const id = req.query.uid
        const data = await User.findOne({_id: id})
        resp.render("update",{data:data})   
    } catch (error) {
        resp.send(error)
    }
})

router.post("/do_update",async(req,resp)=>{
    try {
        const id = req.body.id
        await User.findByIdAndUpdate(id,req.body)
        resp.redirect("viewuser")
    } catch (error) {
        resp.send(error)
    }
})

router.post("/do_login",async(req,resp)=>{
    try {
       const user = await User.findOne({email:req.body.email})
        const isMach = await bcrypt.compare(req.body.pass,user.pass)
        if(isMach){
            resp.redirect("viewuser")
        }else{
            resp.render("login",{err:"email or passward not valid..."})
        }
    } catch (error) {
        resp.render("login",{err:"email or passward not valid..."})
    }
})

module.exports=router