const express = require("express")
const app = express()
require("dotenv").config()
const mongoose =require("mongoose")
const PORT = process.env.PORT
const DB_url = process.env.DB_url
const hbs = require("hbs")
const path = require("path")



mongoose.connect(DB_url).then(result=>{
    console.log("DB connected....");
}).catch(err=>{
    console.log(err);
})

const viewpath = path.join(__dirname,"./temp/views")
const partialpath = path.join(__dirname,"./temp/partials")
const publicpath = path.join(__dirname,"./public")

app.set("view engine","hbs")
app.set("views",viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(publicpath))


app.use("./",require("./router/userrouter"))


app.listen(PORT,()=>{
    console.log("server running on PORT : "+PORT);
})

