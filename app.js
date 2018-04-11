const axios = require('axios');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

/*
-- Using Axios & Promises
*/
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`
axios.get(geocodeUrl).then((response) => {
    if(response.data.status === "ZERO_RESULTS") {
        throw new Error('Unable to find that address');
    }

    const lat = response.data.results[0].geometry.location.lat;
    const long = response.data.results[0].geometry.location.lng;
    const API_KEY = '9c3d4639508df0ad9ef41601b65af9a9';
    const weatherUrl = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;

    return axios.get(weatherUrl);
}).then((response) => {
    console.log(`The current temperature is: ${response.data.currently.temperature}`);
}).catch((error) => {
    if (error.code === 'ENOTFOUND') {
        console.log(error);
    }
})

/*
-- Using Callbacks & the request library for HTTP requests

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        weather.getWeather(results.latitude, results.longitude, (error, response) => {
            if(error) {
                console.log(error);
            } else {
                console.log(`The current temperature is: ${response.temperature}`);
            }
        });
    }
});
*/


/*
-- Using Promises & the request library for HTTP requests
geocode.geocodeAddress(argv.a).then((res) => {
    weather.getWeather(res.latitude, res.longitude).then((res) => {
        console.log(`The current temperature is: ${res.temperature}`);
    }, (error) => {
        console.log(error);
    })
}, (error) => {
    console.log(error);
})
*/

