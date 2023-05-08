const express = require("express") 
const app = express()
const PORT = 3000
const path = require("path")

app.get("/",(req,resp)=>{
    const locate = path.join(__dirname,"first.html")
    resp.sendFile(locate)
})




app.listen(PORT,()=>{
    console.log("server running on PORT : "+PORT);
})

