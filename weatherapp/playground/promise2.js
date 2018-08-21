var request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var addressLocal = encodeURIComponent(address);
    const requestObject = {
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressLocal + '?key=AIzaSyDjGxoiZI7Gf6oJsNW1GvF6gvqm03WRhyw',
      json: true
    }
    request(requestObject, function (error, response, body){
      if(error){
        reject('Unable to connect to google');
      }
      else if(body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address');
      }
      else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
      else{
        reject('Unknown error occurred');
      }
    });
  });
};

geocodeAddress('75094').then((location) => {
  console.log(JSON.stringify(location, undefined,2));
}, (errorMessage) => {
  console.log(errorMessage);
});
