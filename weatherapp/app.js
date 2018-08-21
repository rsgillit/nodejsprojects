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
            .argv;
var results= {};
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log(JSON.stringify(weatherResults, undefined, 2));
      }
    });
  }
});
//console.log(JSON.stringify(results, undefined, 2));
//pass latitude, longitude, callback function
