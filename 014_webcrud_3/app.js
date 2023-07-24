const express = require("express")
const app = express()
const hbs = require("hbs")
const path = require("path")
var bodyParser = require('body-parser')
const mongoose = require("mongoose")
require("dotenv").config()
const PORT = process.env.PORT
const URL = process.env.DB_URL
var cookieParser = require('cookie-parser')

const viewPath = path.join(__dirname,"./temp/view")

app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine","hbs")
app.set("views",viewPath)
app.use(cookieParser())

mongoose.connect(URL).then(result=>{
    console.log("DB connected....");
}).catch(err=>{
    console.log(err);
})

app.use("/",require("./router/userrouter"))


app.listen(PORT,()=>{
    console.log("server running on PORT : "+PORT);
})

