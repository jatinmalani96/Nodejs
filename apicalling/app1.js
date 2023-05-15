var headers = new Headers();
headers.append("X-CSCAPI-KEY", "TnhkcGRwNDR5NEdQcWFZd2xGMXhJT3FKbnBGSXBzVW1MT0o5a0tESA==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

const getCountries = ()=>{


  fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  .then(data=>{
      return data.json()
  }).then(result=>{
      
      var rows="";
      for(var i=0;i<result.length;i++)
      {
          rows = rows+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
      }
      country.innerHTML=rows
  }).catch(err=>{
      console.log(err);
  })


}

var contry;
const getStates=(cname)=>{
    contry=cname


  fetch(`https://api.countrystatecity.in/v1/countries/${cname}/states`, requestOptions)
  .then(data=>{
      return data.json()
  }).then(result=>{
      
      var rows="";
      for(var i=0;i<result.length;i++)
      {
          rows = rows+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
      }
      state.innerHTML=rows
  }).catch(err=>{
      console.log(err);
  })
}

const getcity = (sname)=>{
    
    fetch("https://api.countrystatecity.in/v1/countries/"+contry+"/states/"+sname+"/cities", requestOptions)
    .then(data=>{
        return data.json()
    }).then(result=>{
    //  console.log(result);
        for (let i = 0; i  < result.length; i++) {
            // console.log(result[i].name);
           var rows = rows+ "<option value="+result[i].name+"</option>"
        }
        city.innerHTML=rows
        // console.log(rows);
        // console.log(result);
    }).catch(err=>{
        console.log(err);
    })
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
    }
    