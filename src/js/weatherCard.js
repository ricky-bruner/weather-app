

function weatherCard(object){
    return `<div class="weather-card">
                <h2>${object.city}</h2>
                <h3>${object.condition}</h3>
                <h3>temp: ${object.temp} &deg;F</h3>
                <h3>High: ${object.highTemp} &deg;F</h3>
                <h3>Low: ${object.lowTemp} &deg;F</h3>
                <h3>Wind: ${object.windDir} at ${object.windSpeed}mph</h3>
                <h3>Sunrise: ${object.sunRise} Sunset: ${object.sunSet}</h3>
            </div>`
}

module.exports = weatherCard;