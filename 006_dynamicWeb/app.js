const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")
const hbs = require("hbs")

const indexPath = path.join(__dirname,"./temp/views")
const paricalPath = path.join(__dirname,"./particial")

app.set("view engine","hbs")
app.set("views",indexPath)
hbs.registerPartials(paricalPath)
// app.use(express.static(paricalPath))

app.get("/",(req,resp)=>{
    // resp.send("WELCOME")
    resp.render("index")
})

app.get("/forms",(req,resp)=>{
    resp.render("forms")
})

app.listen(PORT,()=>{
    console.log("server running on port :"+PORT);
})
