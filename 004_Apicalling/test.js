// const axios = require("axios")

// const url = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json"

// const url1 = "https://www.universal-tutorial.com/api/countries/"
// // vlVfacngoXiizP-qRrT6EbLnVWO72YgjDTKHlbog5Ec8BrbP7y2XCuCn_WeyFWeXmZY


// axios.get(url1).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err);
// })

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://countries-states-cities-dataset.p.rapidapi.com/list-countries',
  headers: {
    'X-RapidAPI-Key': 'b46d4bd8ccmshfd22dd73ae7eb5bp1b9594jsna8bb89c63fe6',
    'X-RapidAPI-Host': 'countries-states-cities-dataset.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}