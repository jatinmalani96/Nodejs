const yargs = require("yargs")
const file2 = require ("./file2")

yargs.command({
    command : "bio",
    builder : {
        name : {
            type : String
        },
        age : {
            type : Number
        },
        num : {
            type : Number
        }
    },
    handler : function(argv){
        const data ={
        name : argv.name,
        age : argv.age,
        num : argv.num
    }
    file2.addData(data)
    // console.log(data);
    }
})



yargs.argv