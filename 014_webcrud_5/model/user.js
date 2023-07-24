const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email: {
        type : String
    },
    pass : {
        type : String
    },
    img : {
        type : String
    },
    Tokens : [{
        token : {
            type : String
        }
    }] 
})

module.exports= new mongoose.model("Users",userSchema)