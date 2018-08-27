

function renderWeatherForm(){
    document.querySelector("#weather-form-container").innerHTML = 
        `<div id="weather-form">
            <h2>Input your Zipcode to recieve todays weather</h2>
            <label for="zip-input">Zip Code:</label>
            <input id="zip-input" placeholder="Your Zipcode">
            <button id="submit-zip">Get Weather</button>
        </div>`
}

module.exports = renderWeatherForm;