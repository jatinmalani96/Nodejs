const mongo = require("mongodb")
const mongoClint = mongo.MongoClient
const dburl = "mongodb://127.0.0.1:27017"
const database = "tops"


mongoClint.connect(dburl).then(result=>{
    const mydb = result.db(database)
    console.log("connect");

    // mydb.createCollection("emploees").then(result=>{
    //     console.log("successfull createcollection..");
    // }).catch(err=>{
    //     console.log(err);
    // })
    // const data = {name:"kajal",email:"kajal@gmail.com",num:9876543210,sal:15000}
    // const data1 = {name:"vijay",email:"vijay@gmail.com",num:8876543210,sal:20000}
    // const data2 = {name:"jignesh",email:"jignesh@gmail.com",num:9888943210,sal:19000}
    // const data3 = {name:"arjun",email:"arjun@gmail.com",num:9834543210,sal:10000}
    // const data4 = {name:"hardik",email:"hardik@gmail.com",num:7776543210,sal:17000}
    // mydb.collection("emploees").insertMany([data1,data2,data3,data4]).then(result=>{
    // }).catch()

    // mydb.collection("emploees").insertOne({name:"jay"})
    
    // mydb.collection("emploees").find().toArray().then(result=>{
    //     console.log(result);
    // }).catch()
    
    // mydb.collection("emploees").find({name:"ajay"}).toArray().then(result=>{
    //     console.log(result);
    // }).catch()

    // mydb.collection("emploees").updateOne({name:"jignesh"},{$set:{name:"test"}}).then(result=>{
    //     console.log(result);
    // }).catch()

    // mydb.collection("emploees").updateMany({name:"hardik"},{$set:{email:"jatin@gmail.com"}}).then(result=>{
    //     console.log(result);
    // }).catch()


    
    // mydb.collection("emploees").updateMany({name:"jay"},{$set:{email:"jay@gmail.com"}},{upsert:true}).then(result=>{
    //     console.log(result);
    // }).catch()

    // mydb.collection("emploees").updateMany({name:"jay"},{$set:{num:0}}).then(result=>{
    //     console.log(result);
    // }).catch()

    // mydb.collection("emploees").updateOne({name:"jay"},{$set:{sal:10000}}).then(result=>{
    //     console.log(result);
    // }).catch()


    // mydb.collection("emploees").deleteOne({name:"vijay"}).then(result=>{
    //     console.log("sucessfull");
    // }).catch()

    // mydb.collection("emploees").deleteOne({name:"jay"}).then(result=>{
    //     console.log("delete.....l");
    // }).catch()

    // mydb.collection("emploees").deleteMany({name:"test"}).then(result=>{
    //     console.log("sucessfull");
    // }).catch()

    // mydb.collection("emploees").find({name:"jay"}).toArray().then(result=>{
    //    console.log(result);
    // }).catch()

    // mydb.collection("emploees").findOneAndUpdate({name:"jay"},{$set:{sal:30000}},{upsert:true}).toArray().then(result=>{
    //     console.log(result);
    //  }).catch()

    mydb.collection("emploees").findOneAndDelete({name:"jay"}).then(result=>{
        console.log(result);
     }).catch()


     
    mydb.collection("emploees")

}).catch(err=>{
    console.log(err);
})

