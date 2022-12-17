const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = 0;
  tempCelsius = tempFahrenheit - 32;
  tempCelsius *= 5/9;
  tempCelsius= Math.round(tempCelsius * 10) / 10

  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = 0;
  tempFahrenheit = tempCelsius * (9/5);
  tempFahrenheit += 32;
  tempFahrenheit= Math.round(tempFahrenheit * 10) / 10

  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
