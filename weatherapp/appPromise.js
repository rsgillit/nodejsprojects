const yargs = require('yargs');
const axios = require('axios');
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
            .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl =  'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + '?key=AIzaSyDjGxoiZI7Gf6oJsNW1GvF6gvqm03WRhyw';
axios.get(geocodeUrl)
        .then((response) => {
          if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find that address');
          }
          console.log(response.data.results[0].formatted_address);
          var lat = response.data.results[0].geometry.location.lat;
          var lng = response.data.results[0].geometry.location.lng;
          var weatherUrl = 'https://api.darksky.net/forecast/a62d654d71b21a2105f82ac3531e6bb3/' + lat + ',' + lng;
          return axios.get(weatherUrl);
        })
        .then((response) => {
          var temperature = response.data.currently.temperature;
          var apparentTemperature = response.data.currently.apparentTemperature;
          console.log('its currently:',temperature,'. It feels like ',apparentTemperature);
        })
        .catch((e) => {
          if(e.code === 'ENOTFOUND'){
            console.log('Unable to connect to API servers');
          }
          else{
            console.log(e.message);
          }
        });
