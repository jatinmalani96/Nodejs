const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const path = require("path")
const hbs = require("hbs")
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
var bodyParser = require('body-parser')

mongoose.connect(DB_URL).then(result=>{
    console.log("DB connected...");
}).catch(err=>{
    console.log(err);
})

app.use(bodyParser.urlencoded({ extended: false }))
const viewPath = path.join(__dirname,"./temp/views")
const partialPath = path.join(__dirname,"./temp/partials")
const publicPath = path.join(__dirname,"./public")

app.set("view engine","hbs")
app.set("views",viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))


app.use("/",require("./router/userrouter"))


app.listen(PORT,()=>{
    console.log("server running on PORT : "+PORT);
})

