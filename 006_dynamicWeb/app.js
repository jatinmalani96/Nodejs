const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")
const viewpath = path.join(__dirname,"./templetes/views")

app.set("view engone","hbs")
app.set("views",viewpath)


app.get("/",(req,resp)=>{
     resp.render("index")
})


app.listen(PORT,()=>{
    console.log("server running on PORT : "+PORT);
})

