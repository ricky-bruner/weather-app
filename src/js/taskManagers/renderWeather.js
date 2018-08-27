const converters = require("../weatherConverter");
const weatherCard = require("../weatherCard");


function renderWeather(){
    let currentUser = JSON.parse(sessionStorage.getItem("user"));
    let weather = currentUser.currentWeather.weather;
    let weatherObj = {
        city: weather.name,
        condition: weather.weather[0].main,
        temp: converters.convertTemp(weather.main.temp),
        highTemp: converters.convertTemp(weather.main.temp_max),
        lowTemp: converters.convertTemp(weather.main.temp_min),
        windDir: converters.convertWind(weather.wind.deg),
        windSpeed: weather.wind.speed,
        sunRise: converters.convertSun(weather.sys.sunrise),
        sunSet: converters.convertSun(weather.sys.sunset)
    }
    document.querySelector("#weather-result-container").innerHTML = weatherCard(weatherObj);
}

module.exports = renderWeather;