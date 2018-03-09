let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  let currentTemp = data.main.temp.toFixed(0)
  console.log(currentTemp)
  let city = data.name
  console.log(city)

  $("#temperature").text("It is " + currentTemp + " degrees outside.")
  $("#city").text(city)

}

let getWeather = function(info) {
  console.log(info)
  let latitude = info.coords.latitude.toFixed(4)
  let longitude = info.coords.longitude.toFixed(4)
  let apiKey = 'cb342df68c562dc560830a08448faf9b';

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget);

}


$(function() {
  navigator.geolocation.getCurrentPosition(getWeather)
})

let convertToJSON = function(rawData) { return rawData.json(); }
