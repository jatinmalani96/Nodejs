const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")

app.get("/",(req,resp)=>{
    // resp.send("This is semple...")
    const location = path.join(__dirname,"first.html")
    resp.sendFile(location)
})
app.get("/home",(req,resp)=>{
    // resp.send("This is Home page...")
    const home = path.join(__dirname,"home.html")
    resp.sendFile(home)
})







app.listen(PORT,()=>{
    console.log("server running on PORT :"+PORT);
})

