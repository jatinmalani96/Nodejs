const experss = require("express")
const app = experss()
const PORT = 9000
const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/eshop"

app.use(experss.json())

mongoose.connect(url).then(result=>{
    console.log("successfull connected...");
})

const ProductSchma = new mongoose.Schema({
    name :{
        type : String
    },
    price : {
        type : Number
    },
    qty : {
        type : Number
    },
    date :{
        type : Date,
        default : Date.now()
    }
})

const Product = new mongoose.model("snap",ProductSchma)

app.get("/",(req,resp)=>{
   Product.find().then(result=>{
        resp.send(result)
   }).catch(err=>{
        resp.send(err)
   })
})

app.post("/",(req,resp)=>{
    const pro = new Product(req.body)
    pro.save().then(result=>{
        resp.send(result)
    }).catch(err=>{
        resp.send(err)
    })
})

app.put("/:id",(req,resp)=>{
    const _id =req.params.id

    Product.findByIdAndUpdate(_id,req.body).then(result=>{
        resp.send(result)
    }).catch(err=>{
        resp.send(err)
    })
})

app.delete("/:id",(req,resp)=>{
    const _id =req.params.id

    Product.findByIdAndDelete(_id).then(result=>{
        resp.send(result)
    }).catch(err=>{
        resp.send(err)
    })
})



app.listen(PORT,()=>{
    console.log("server running on port"+PORT);
})
