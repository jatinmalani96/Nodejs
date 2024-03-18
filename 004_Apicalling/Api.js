const axios = require("axios")
axios.get("https://restcountries.com/v3.1/all").then(result=>
    {
        for (let i = 0; i < result.data.length; i++) {
            var dt = result.data[i].name.common
            var ct = result.data[i].capital
            var currencies = result.data[i].currencies
            console.log(dt+" "+ct);
            console.log(currencies);
        }
    // console.log(result);
}).catch(err=>{
    console.log(err);
})



