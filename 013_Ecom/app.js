const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 3000
const url = "mongodb+srv://jatin:jatin@cluster0.zui6fku.mongodb.net/E_com?retryWrites=true&w=majority"

app.use(express.json())

mongoose.connect(url).then(result=>{
    console.log("DB Connected...");
}).catch(err=>{
    console.log(err);
})

app.use("/users",require("./router/usersrouter"))

app.use("/categorys",require("./router/categoryrouter"))

app.use("/product",require("./router/productrouter"))

app.use("/carts",require("./router/cartrouter"))

app.listen(PORT,()=>{
    console.log("server running on PORT :"+PORT);
})
