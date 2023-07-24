const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const PORT = process.env.PORT
const URL = process.env.URL
const path = require("path")
const hbs = require("hbs")
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const viewPath = path.join(__dirname,"./temp/views")
const partialPath = path.join(__dirname,"./temp/partials")
const publicPath = path.join(__dirname,"./public")

app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine","hbs")
app.set("views",viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))
app.use(cookieParser())

mongoose.connect(URL).then(result=>{
    console.log("Db connected...");
}).catch(err=>{
    console.log(err);
})

app.use("/",require("./router/userrouter"))

app.listen(PORT,()=>{
    console.log("server running on PORT : "+PORT);
})