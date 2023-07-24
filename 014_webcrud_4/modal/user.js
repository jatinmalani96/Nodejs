const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    uname : {
        type : String
    },
    email : {
        type : String
    },
    pass : {
        type : String
    },
    Tokens : [{
        token:{
            type : String
        }
    }]
})

module.exports=new mongoose.model("Users",userSchema)