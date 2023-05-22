const mongo = require("mongodb")
const mongoclint = mongo.MongoClient
const url = "mongodb://127.0.0.1:27017/"

mongoclint.connect(url).then(result=>{
    const mydb = result.db("Lab")
    console.log("connected...");

    // mydb.createCollection("Labss").then(result=>{
    //     console.log("successfull connection..");
    // }).catch()

    const db = mydb.collection("Labss")

    // db.insertOne({name:"blood"}).then(result=>{
    //     console.log("inserted");
    // }).catch()

    // const d1 ={name:"blank"}
    // const d2 = {name:"abc"}

    // db.insertMany([d1,d2]).then(result=>{
    //     console.log(result);
    // }).catch()

    // db.updateOne({name:"blood"},{$set:{group:"O+"}}).then(result=>{
    //     console.log(result);
    // }).catch()

    // db.deleteOne({name:"blood"}).then(result=>{
    //     console.log(result);
    // }).catch()



    // db.find().toArray().then(result=>{
    //     console.log(result);
    // }).catch()


    
}).catch(err=>{
    console.log(err);
})


