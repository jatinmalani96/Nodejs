const mongo = require("mongodb")
const mongoclint = mongo.MongoClient
const url = "mongodb://127.0.0.1:27017/"

mongoclint.connect(url).then(result=>{
    const mydb = result.db("Lab")
    console.log("connected...");

    mydb.createCollection("")




}).catch(err=>{
    console.log(err);
})


