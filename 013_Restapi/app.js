const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const url = "mongodb+srv://jatin:jatin@cluster0.zui6fku.mongodb.net/Eshop?retryWrites=true&w=majority"
mongoose.connect(url).then(result=>{
    console.log("successfull connected....");
}).catch(err=>{
    console.log(err);
})


app.use("/",require("./router/router"))



app.listen(PORT,()=>{
    console.log("running on PORT :"+PORT);
})