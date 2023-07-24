
const jwt = require("jsonwebtoken")


const gettoken =async()=>{
    try {
        
        const token = await jwt.sign({name:"jatin"},"thisismyjsonwebtokenloginid")
        console.log(token);

        const data = await jwt.verify(token,"thisismyjsonwebtokenloginid")
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}


gettoken()