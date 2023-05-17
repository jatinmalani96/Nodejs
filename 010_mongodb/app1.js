const mongo = require("mongodb")
const Mongoclient = mongo.MongoClient
const dburl = "mongodb://127.0.0.1:27017/flip"

Mongoclient.connect(dburl, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });