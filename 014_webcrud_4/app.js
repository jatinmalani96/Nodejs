const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const URL = process.env.URL
const mongoose = require("mongoose")
const hbs = require("hbs")
const path = require("path")
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const publicPath = path.join(__dirname,"./public")
const viewPath = path.join(__dirname,"./temp/views")
const partialPath = path.join(__dirname,"./temp/partials")

app.set("view engine","hbs")
app.set("views",viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

mongoose.connect(URL).then(result=>{
    console.log("DB connected.....");
})

app.use("/",require("./router/userrouter"))

app.listen(PORT,()=>{
    console.log("server running on PORT : "+PORT);
})