const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    category :{
        type : String
    }
})


module.exports= new mongoose.model("category",categorySchema)