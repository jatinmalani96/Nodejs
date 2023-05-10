const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")
const hbs = require("hbs")

const viewPath = path.join(__dirname,"./temp")
const particalPath = path.join(__dirname,"./partical")
const image = path.join(__dirname,"./public") 

app.set("view engine","hbs")
app.set("views",viewPath)
hbs.registerPartials(particalPath)
app.use(express.static(image)) 

app.get("/",(req,resp)=>{
    // resp.send("this is blank page")
    resp.render("index",{uname : "yesh"})
})

app.get("/home",(req,resp)=>{
    resp.render("Home")
})

app.get("/about",(req,resp)=>{
    resp.render("about")
})


app.listen(PORT,()=>{
    console.log("server running on port: "+PORT);
})

