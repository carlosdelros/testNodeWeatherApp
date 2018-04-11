const request = require('request');

/*
-- With callbacks

var geocodeAddress =  (address, callback) => {
    const encondedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encondedAddress}`,
        json: true
    }, (error, resposne, body) => {

        if (error) {
            callback('Unable to connect to Google Server');
        } else if (body.result === 'ZERO_RESULTS') {
            callback('Could not find any result for this address');
        } else if (body.status === 'OK') {
            callback(null, {
                address: body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else {
            callback('Invalid address');
        }
    });
};

*/

/*
-- With Promises
var geocodeAddress = (address) => {
    const encondedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encondedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google Server');
            } else if (body.result === 'ZERO_RESULTS') {
                reject('Could not find any result for this address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } else {
                reject('Invalid address');
            }
        });
    });
};
module.exports.geocodeAddress = geocodeAddress;

*/


