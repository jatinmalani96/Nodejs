const router = require("express").Router()
const User = require("../modal/user")
const bcrypt = require("bcryptjs")
const auth = require("../middleware/auth")

router.get("/",(req,resp)=>{
    resp.render("login")
})

router.get("/reg",(req,resp)=>{
    resp.render("reg")
})


router.post("/do_ragiester",async(req,resp)=>{
    try {
        const user = new User({name:req.body.name,email:req.body.email,pass:req.body.pass});
         await user.save()
        resp.render("reg",{msg:"Sucressfull create form..."})
    } catch (error) {
        resp.send(error)
    }
})

router.get("/views",auth,async(req,resp)=>{
    try {
        const data = await User.find()
        resp.render("views",{userdata:data})
    } catch (error) {
        resp.send(error)
    }
})

router.get("/deleteuser",async(req,resp)=>{
    try {
        const id = req.query.uid
        await User.findByIdAndDelete(id)
        resp.redirect("views")
    } catch (error) {
        resp.send(error)
    }
   
})

router.get("/edituser",async(req,resp)=>{
    try {
        const id = req.query.uid
         const data =  await User.findOne({_id : id})
        //  console.log(data);
        resp.render("update",{data : data})
    } catch (error) {
        resp.send(error)
    }
   
})

router.post("/do_update",async(req,resp)=>{
    try {
        const upass =   await bcrypt.hash(req.body.pass,10)
        const id = req.body.id
          await User.findByIdAndUpdate(id,{name:req.body.name,email:req.body.email,pass:upass})
        
        resp.redirect("views")
    } catch (error) {
        resp.send(error)
    }
})

router.post("/do_login",async(req,resp)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        // if(user.Tokens.lenght>1)
        // {
        //     resp.render("login",{err:"Max user limit..."})
        // }

        const isValid = await bcrypt.compare(req.body.pass,user.pass)
        if(isValid)
        {
            const token =  await user.gTokens()
            // console.log(token);
            resp.cookie("jwt",token)
            resp.redirect("views") 
        }
        else{
            resp.render("login",{err:"Enter valid password..."})
        }
    } catch (error) {
        resp.render("login",{err:"Enter valid password..."})
    }
})

router.get("/logout",auth,async(req,resp)=>{
    try {
        const user = req.user
    const token = req.token

    user.Tokens = user.Tokens.filter(ele=>{
        return ele.token!=token
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

    user.Tokens = []
    user.save()
    
    
    resp.clearCookie("jwt")
    resp.render("login")

    } catch (error) {
        console.log(error);
    }
})



module.exports=router