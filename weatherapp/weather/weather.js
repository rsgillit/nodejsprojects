var request = require('request');

var getWeather = (latitude, longitude, callback) => {
  const requestObject = {
      //url: 'https://api.darksky.net/forecast/a62d654d71b21a2105f82ac3531e6bb3/' + latitude + ',' + longitude,
      url: 'https://api.darksky.net/forecast/a62d654d71b21a2105f82ac3531e6bb3/6,-96',
      json: true
    };

    request(requestObject, function (error, response, body){
      console.log(error);
      if(!error && response.statusCode === 200){
        callback(undefined,{
          temperature: body.currently.temperature,
          apparentTemperature : body.currently.apparentTemperature
        });
      }
      else {
        callback('Unable to fetch weather');
      }
    });
};

module.exports = {
  getWeather: getWeather
}
