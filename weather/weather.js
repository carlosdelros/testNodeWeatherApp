const request = require('request');
const API_KEY = '9c3d4639508df0ad9ef41601b65af9a9';

// var getWeather = (lat, lon, callback) => {
//     request({
//         url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`,
//         json: true
//     }, function (error, response, body) {
//         if (error || response.statusCode !== 200) {
//             callback('Unable to fetch weather');
//         } else {
//             callback(null, {temperature: body.currently.temperature});
//         }
//     });
// };

var getWeather = (lat, lon) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`,
            json: true
        }, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                reject('Unable to fetch weather');
            } else {
                resolve({temperature: body.currently.temperature});
            }
        });
    });
};

module.exports.getWeather = getWeather;
