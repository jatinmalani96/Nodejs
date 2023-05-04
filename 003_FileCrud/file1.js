const fs = require("fs")

const addData = (data)=>{

    const alldata = getdata()
    
    alldata.push(data)
    const mydata = JSON.stringify(alldata)
    fs.writeFile("bio.json",mydata,()=>{
        console.log("add");
    })

}

const view = ()=>{
    const alldata = getdata()
    console.log(alldata);
}

const getdata =()=>{
    const data = fs.readFileSync("bio.json","utf-8")
    const mydata = JSON.parse(data)
    
    return mydata
}


module.exports={addData,view}