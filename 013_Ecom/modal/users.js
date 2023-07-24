const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")


const userSchama = new mongoose.Schema({
    uname :{
        type : String
    },
    email :{
        type : String
    },
    pass : {
        type : String
    },
    num :{
        type : Number
    }
})

userSchama.pre("save",async function(){
    try {
        this.pass = await bcrypt.hash(this.pass,10)
    } catch (error) {
        console.log(error);
    }
})

module.exports= new mongoose.model("User",userSchama)