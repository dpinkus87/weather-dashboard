// variables for current weather section
var city = "";
var cityList = $(".city-list");
var searchCity = $("#search-city");
var currentCity = $("#current-city");
var currentTemp = $("#temperature");
var currentHumidity = $("#humidity");
var currentWind = $("#wind");
var cityArray = [];
// searches for the city typed in
function find(data) {
  for (var i = 0; i < cityArray.length; i++) {
    if(data.toUpperCase() === cityArray[i]) {
      return -1;
    };
  };
  return 1;
};
// my api key
var apikey = "d869eb6dae6960fe226dbf67bb6b6b4b";
// displays the city that was searched
function Weather(weatherEvent) {
  weatherEvent.preventDefault();
  if (searchCity.val().trim()!=="") {
    city=searchCity.val().trim();
    currentWeather(city);
  };
};