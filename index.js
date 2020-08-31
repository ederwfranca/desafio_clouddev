'use strict';

const http = require('http');
exports.handler = async (event) => {
    let dataString = '';

    console.log(event);
    let city = event.name;
    let url = "http://wttr.in/" + city + "?format=j1";
    console.log(url);
    
    const response = await new Promise((resolve, reject) => {
        
        const req = http.get(url, function(res) {
            res.on('data', chunk => {
                dataString += chunk;
            });
            res.on('end', () => {
                console.log('OK');
                const res = JSON.parse(dataString);
                console.log(res.current_condition[0].temp_C);
                resolve({
                    statusCode: 200,
                    body: {"Current Temp C" : res.current_condition[0].temp_C, 
                            "Current Temp F" : res.current_condition[0].temp_F, 
                            "Current Visibility" : res.current_condition[0].visibility,
                            "Current Humidity" : res.current_condition[0]. humidity,
                            "Weather Temp C" : res.weather[0].hourly[0].tempC,
                            "Weather Temp F" : res.weather[0].hourly[0].tempF,
                            "Weather Visibility" : res.weather[0].hourly[0].visibility,
                            "Weather Humidity" : res.weather[0].hourly[0].humidity,
                            "Weather data" : res.weather[0].date,
                            "Area" : res.nearest_area[0].areaName[0].value,
                            "Pais" : res.nearest_area[0].country[0].value
                    }
            });
          });
        });
        
        req.on('error', (e) => {
            console.log('ServerError');
          reject({
              statusCode: 500,
              body: 'Something went wrong!'
          });
        });
    });
    
    return response;
};