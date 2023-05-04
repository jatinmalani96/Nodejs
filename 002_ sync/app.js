const { log } = require('console');
const fs = require('fs')
// fs.writeFileSync("test.txt","this is test file")

const data =fs.readFileSync("test.txt","utf-8")
console.log(data);
console.log("this is sync");


// fs.writeFile("data.txt","this is good",(err)=>{
//     console.log("file crate successfull...");
// })
fs.readFile("data.txt",'utf-8',(err,data)=>{
    // console.log("file read succesfull.!! ");
    console.log(data);    

})
console.log("this is async");




