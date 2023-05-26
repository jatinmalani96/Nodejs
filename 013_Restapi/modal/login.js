const mongoose = require("mongoose")

const studentlogin = mongoose.Schema({
    name:{
        type : String
    },
    email:{
        type : String
    },
    pass:{
        type : String
    },
    date:{
        type : Date,
        default : Date.now()
    }
})

studentlogin.pre("save",async function(){
    try {
        this.pass = await bcrypt.hash(this.pass,10)
    } catch (error) {
        console.log(error);
    }
})
const student = new mongoose.model("flip",studentlogin);

module.exports=student
