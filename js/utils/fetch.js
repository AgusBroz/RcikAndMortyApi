//const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const okStatus = 200;
const fetchData = (api_url) =>{
    const xhttp = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        
        xhttp.open('GET', api_url, true)
        xhttp.onreadystatechange = () =>{
            if(xhttp.readyState === 4)
                (xhttp.status === okStatus )
                ? resolve(JSON.parse(xhttp.responseText)) 
                : reject(new Error('Error: '+api_url))
        }
        xhttp.send();
    })
}