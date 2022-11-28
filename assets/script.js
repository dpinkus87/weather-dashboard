// Global variables

var apiKey = "70dc876db5069b24ab66ab771e564f0e"


// Current Weather variables
var currentCity = $("#currentCity");
var currentTemp = $("#humidity");
var currentHumidity = $("#humidity");
var currentWind = $("#wind");
var cityArray = [];

var searchHistory = $(".searchHistory")





// Function to fetch weather API
function getCity() {
    var cityName = $(".form-control").val()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;
    fetch(queryURL)
        .then(function (response) {
            console.log(response)
            if (response.ok) {
                return response.json()
            }
        }).then(data => {
            var city = {
                name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
            }
            getForecast(city)
            displayCurrentweather(data)
        })

}

function getForecast(city) {
    var forecastWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + city.lat + "&lon=" + city.lon + "&units=imperial&appid=" + apiKey;
    fetch(forecastWeatherQueryURL)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => {
            console.log(data);

            displayForecast(data)

        })
}

function displayCurrentweather(data) {
    $("#current-city").text(data.name)
    $("#temp").text("Temp: " + data.main.temp + " (F)")
    $("#wind").text("Wind speed: " + data.wind.speed + "mph")
    $("#humidity").text("Humidity: " + data.main.humidity + "%")

    console.log(data);

}

function displayForecast(data) {
    for(i = 0, i < 5; i++;){
        var fDate = data.list[0].dt_txt;
        var fImg = "https://openweathermap.org/img/wn/" + iconcode + ".png"
        var fTemp = data.list[0].main.temp + " (F)";
        var fWind = data.list[0].wind.speed + "mph";
        var fHumidity = data.list[0].main.humidity + "%";

        $("#fDate" + i).html(fDate)
        $("#fImg" + i).html("<img src="+fImg+">");
        $("#fTemp" + i).html(fTemp+"&#8457");
        $("#fWInd" + i).html(fWind+"MPH");
        $("#fHumidity" + i).html(fHumidity+"%");
    }
}

// Create list of cities previously searched
function cityList(data) {
    var listEl = $("<li> + data.toUpperCase() + </li>");
    $(listEl).attr("class", "list-group-item");
    $(listEl).attr("data-value", data.toUpperCase());
    $(".searchHistory").append(listEl)
    console.log(cityList);
}

// function previousCities() {
//     var liEL = ""
// }


$(".btn-primary").on('click', getCity)
// $(document).on('click', previousCities)