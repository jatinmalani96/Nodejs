const mongoose = require("mongoose")

dburl = "mongodb://127.0.0.1:27017/shop"

mongoose.connect(dburl).then(result=>{
    console.log("db connected..");
}).catch(err=>{
    console.log(err);
})

const ProductSchma = new mongoose.Schema({
    name :{
        type : String
    },
    price :{
        type : Number
    },
    qty :{
        type : Number
    }
})

const Proudect = new mongoose.model("Product", ProductSchma)

const addData = ()=>{
    const pro = new Proudect({name:"tv",price:16000,qty:1})
    pro.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}

const viewData =()=>{
    Proudect.find().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })

}

const addManyData =()=>{
    const d1 = new Proudect({name:"table",price:1500})
    const d2 = new Proudect({name : "data cable",price :100,qty:15})
    Proudect.insertMany([d1,d2]).then(result=>{
        console.log(result);
    }).catch()

}

const updataData = ()=>{

    Proudect.findOneAndUpdate({name:"tv"},{price:20000}).then(result=>{
        console.log(result);
    }).catch()

}

const update =()=>{
    Proudect.updateOne({name:"shirt"},{$set:{qty:10}}).then(result=>{
        console.log(result);
    }).catch()
}
const updates =()=>{
    Proudect.updateOne({name:"shirt"},{qty:5}).then(result=>{
        console.log(result);
    }).catch()
}

const deleteData = ()=>{
    Proudect.deleteOne({name:"table"}).then(result=>{
        console.log("Delete successfull...");
    }).catch()
}

const deleteMany =()=>{
    Proudect.deleteMany({qty:{$gte:1}}).then(result=>{
        console.log(result);
    }).catch()
}





// addData()
// viewData()
// addManyData()
// updataData()
// updates()
// deleteData()
// deleteMany()

