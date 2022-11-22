var apiKey = "70dc876db5069b24ab66ab771e564f0e"
var cityName;
var lat;
var lon;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
var forecastWeatherQueryURL = api.openweathermap.org/data/2.5/forecast? + lat + "&lon=" + lon + "&appid=" + apiKey;
var reverseGeoCode = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + lat + "&lon=" + lon + "&limit=&appid=" + apiKey;

function getAPI () {
    fetch(forecastWeatherQueryURL)
    .then(function (response) {
        return response.json()
    }
    )
} 