const renderWeatherForm = require("../weatherForm");
const updateWeather = require("./updateWeather");
const renderWeather = require("./renderWeather");
const getDate = require("../getDate");

function checkData(user){
    if(!user.zipCode.length){
        console.log("is this real life, or just fantasy?");
        renderWeatherForm();
    } else if(user.currentWeather.date !== getDate()){
        console.log("You dont have today's weather");
        updateWeather(user);
    } else {
        console.log("you have the right date and weather, here is your page");
        renderWeather();
    }
}

module.exports = checkData;