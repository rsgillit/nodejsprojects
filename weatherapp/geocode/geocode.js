const request = require("request");

var geocodeAddress =  (address, callback) => {
  var addressLocal = encodeURIComponent(address);
  const requestObject = {
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressLocal + '?key=AIzaSyDjGxoiZI7Gf6oJsNW1GvF6gvqm03WRhyw:443',
    json: true
  }
  request(requestObject, function (error, response, body){
    if(error){
      callback('Unable to connect to google');
      }
    else if(body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address');
      }
    else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
      }
    else{
      callback('Unknown error occurred');
      console.log('response:', JSON.stringify(response, undefined, 2));
    }
  });
};


module.exports = {
  geocodeAddress: geocodeAddress
}
