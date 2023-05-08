const fs = require("fs")


const addData = (data)=>{
    const alldata = getdata()


    alldata.push(data)
    const mydata = JSON.stringify(alldata)
    fs.writeFile("aj.json",mydata,()=>{
        console.log("inserted data..");
    })
}

const viewfile = ()=>{
    const alldata = getdata()
    console.log(alldata);
}

const getdata =()=>{
    try {
        const data = fs.readFileSync("aj.json","utf-8")
        const mydata = JSON.parse(data)
        return mydata
        
    } catch (error) {
        return []
    }
}




module.exports={addData,viewfile}