var headers = new Headers();
headers.append("X-CSCAPI-KEY", "TnhkcGRwNDR5NEdQcWFZd2xGMXhJT3FKbnBGSXBzVW1MT0o5a0tESA==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

const getcountry=()=>{
fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(data=>{
    return data.json()
}).then(result=>{
    
    for (let i = 0; i < result.length; i++) {
        // console.log(result[i].name);
       var rows=rows+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
        
    }
    country.innerHTML=rows
    // console.log(rows);
}).catch(err=>{
    console.log(err);
})
}
var contryname;
const getstate=(cname)=>{
    contryname=cname
    fetch("https://api.countrystatecity.in/v1/countries/"+cname+"/states", requestOptions)
    .then(data=>{
        return data.json()
    }).then(result=>{
        
        for (let i = 0; i < result.length; i++) {
            // console.log(result[i].name);
           var rows=rows+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
            
        }
        state.innerHTML=rows
        // console.log(rows);
    }).catch(err=>{
        console.log(err);
    })
    }

    
const getcity=(sname)=>{
    fetch("https://api.countrystatecity.in/v1/countries/"+contryname+"/states/"+sname+"/cities", requestOptions)
    .then(data=>{
        return data.json()
    }).then(result=>{
        
        for (let i = 0; i < result.length; i++) {
            // console.log(result[i].name);
           var rows=rows+"<option>"+result[i].name+"</option>"
            
        }
        city.innerHTML=rows
        // console.log(rows);
    }).catch(err=>{
        console.log(err);
    })
    }
const getData = ()=>{
    const city =  document.getElementById("search").value
    
     fetch(`currentweather?location=${city}`).then(data=>{
         return data.json()
     }).then(result=>{
        
        // console.log(result);
         city.innerHTML=result.city
         temp.innerHTML=result.temp
         pressure.innerHTML=result.pressure
         humidity.innerHTML=result.humidity
         lat.innerHTML=result.lat
         lng.innerHTML=result.lng
 
 
     }).catch(err=>{
         console.log(err);
     })
 
 
 
 
 
 }