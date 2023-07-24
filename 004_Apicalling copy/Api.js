const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {id: 'UxxajLWwzqY'},
  headers: {
    'X-RapidAPI-Key': '6e1cef70bbmsh66e9f3f44bcc8d3p13755djsnedfe44103b16',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

	const response =  axios.get(options).then(result=>
  {

      for (let i = 0; i < result.data.length; i++)
     
       {
          var dt = result.data[i]
      //     var ct = result.data[i].capital
      //     var currencies = result.data[i].currencies
      //     console.log(dt+" "+ct);
      //     console.log(currencies);
      console.log(dt);

      }
  // console.log(result);
}).catch(err=>{
  console.log(err);
})
