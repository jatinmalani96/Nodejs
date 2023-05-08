const yargs = require("yargs")
const file = require("./file")

yargs.command({
    command : "aj",
    builder : {
        name : {
            type : String
        },
        age : {
            type : Number
        }
    },
    handler : function(argv){
        const data ={
            name : argv.name,
            age : argv.age
        }
        // console.log(data);
        file.addData(data)
    }
    
})

yargs.command({
    command : "view",
    handler : function(argv){
        file.viewfile()

    }
})

yargs.argv