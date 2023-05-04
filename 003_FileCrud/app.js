const yargs = require("yargs")
const fs = require("fs")
yargs.command({
    command : "bio",
    builder : {
        name : {
            type : String 

        },
        email : {
            type: String
        },
        number : {
            type : Number
        }
    },
    handler : function(argv){
        console.log("calling...");
        // console.log(argv.name+" "+argv.email);
        const data = {
            name : argv.name,
            email : argv.email,
            number : argv.number
       }
    //    file.createfile(data)
        console.log(data);
    }
})
// fs.readFile("student.json","utf-8",()=>{
//     return JSON.parse(data)
// })


// const createfile = (data)=>{
//     const alldata = viewdata();

//     alldata.push(data);
//     const newdata = JSON.stringify(alldata)
//     fs.writeFile("student.json","bio",()=>{
//         console.log("successfull file create");
//     })
// }
// // const output = {name : "jatin"}
// const out = JSON.stringify(output)
// fs.writeFileSync("data.json",out)



yargs.argv

