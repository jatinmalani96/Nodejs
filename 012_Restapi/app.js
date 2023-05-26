const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/snap"
const PORT = 3000;

mongoose.connect(url).then(result=>{
    console.log("db connected...");
})

const snapSchema = new mongoose.Schema({
    name : {
        type : String
    },
    qty :{
        type : Number
    },
    joingdata :{
        type : Date,
        default : Date.now()
    }
})
const Product = new mongoose.model("snapdel",snapSchema)

// app.post("/item",async(req,resp)=>{
   
// })

app.use(express.json())
app.get("/",async(req,resp)=>{
    try {
        const data = await Product.find()
        resp.send(data)
    } catch (error) {
        console.log(error);
    }
})

app.post("/",async(req,resp)=>{
   try {
        const item = new Product(req.body)
        const data = await item.save()
        resp.send(data)
   } catch (error) {
    resp.send(error)
   }

})
app.put("/:id",async(req,resp)=>{
    const _id = req.params.id
    try {
        const data = await Product.findByIdAndUpdate(_id,req.body)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})
app.delete("/",async(req,resp)=>{
    const _id = req.params.id
    try {
        const data = await Product.findByIdAndDelete(_id)
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


app.listen(PORT,()=>{
    console.log("server running "+PORT);
})